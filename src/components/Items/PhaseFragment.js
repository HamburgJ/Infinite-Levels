import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useAchievements } from '../../hooks/useAchievements';

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 8px rgba(180, 120, 255, 0.3), inset 0 0 8px rgba(180, 120, 255, 0.1); }
  50% { box-shadow: 0 0 20px rgba(180, 120, 255, 0.6), inset 0 0 15px rgba(180, 120, 255, 0.2); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const FragmentContainer = styled.div`
  text-align: center;
  margin: 1.5rem 0;
`;

const FragmentBody = styled.div`
  display: inline-block;
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
  border: 2px solid ${props => props.$collected ? '#555' : 'rgba(180, 120, 255, 0.6)'};
  background: ${props => props.$collected 
    ? 'rgba(40, 30, 60, 0.4)' 
    : 'rgba(40, 20, 80, 0.6)'};
  animation: ${props => props.$collected ? 'none' : glow} 3s ease-in-out infinite;
  cursor: ${props => props.$collected ? 'default' : 'pointer'};
  max-width: 500px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: ${props => props.$collected ? 0.6 : 1};

  &:hover {
    transform: ${props => props.$collected ? 'none' : 'scale(1.02)'};
  }
`;

const FragmentLabel = styled.div`
  font-size: 0.75rem;
  color: rgba(180, 120, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
`;

const FragmentText = styled.div`
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${props => props.$collected ? '#888' : '#d4b8ff'};
  font-style: italic;
`;

const CollectedBadge = styled.div`
  font-size: 0.8rem;
  color: #666;
  margin-top: 0.5rem;
`;

const PHASE_FRAGMENTS = {
  1: {
    location: '5i',
    text: 'Imaginary numbers were invented to solve equations that had no solution. The square root of negative one doesn\'t exist... so mathematicians MADE it exist. They called it i. And then they discovered it was already everywhere.'
  },
  2: {
    location: '3+3i',
    text: 'Electrical engineers use imaginary numbers to describe alternating current. The lights in your house run on imaginary numbers. The phone in your pocket processes signals through the complex plane. They were never imaginary.'
  },
  3: {
    location: '5+1i',
    text: 'Quantum mechanics requires complex numbers. The wave function that describes every particle in the universe has an imaginary component. Reality is complex — literally. The universe runs on numbers that "don\'t exist."'
  },
  4: {
    location: '5+3i',
    text: 'Euler\'s formula: e to the power of i times pi, plus one, equals zero. Five fundamental constants — e, i, π, one, zero — connected by one equation. It\'s been called the most beautiful formula in mathematics.'
  },
  5: {
    location: '999+999i',
    text: 'You\'ve been walking through the complex plane. Every step you took — every stable island, every collapse, every rotation — was a complex number. The game was always complex. You just couldn\'t see it until you stepped sideways.'
  }
};

// Key for localStorage persistence of collected fragments
const FRAGMENTS_KEY = 'complexPhaseFragments';

const getCollectedFragments = () => {
  try {
    const stored = localStorage.getItem(FRAGMENTS_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

const collectFragment = (fragmentNumber) => {
  const collected = getCollectedFragments();
  collected[fragmentNumber] = true;
  localStorage.setItem(FRAGMENTS_KEY, JSON.stringify(collected));
};

export const PhaseFragment = ({ fragmentNumber }) => {
  const { unlockAchievement } = useAchievements();
  const [collected, setCollected] = React.useState(() => {
    return !!getCollectedFragments()[fragmentNumber];
  });

  const fragment = PHASE_FRAGMENTS[fragmentNumber];
  if (!fragment) return null;

  const handleCollect = () => {
    if (collected) return;
    collectFragment(fragmentNumber);
    setCollected(true);

    // Check if all fragments are now collected
    const allCollected = getCollectedFragments();
    allCollected[fragmentNumber] = true;
    const totalCollected = Object.keys(allCollected).length;
    if (totalCollected >= 5) {
      unlockAchievement('PHASE_COMPLETE');
    }
  };

  return (
    <FragmentContainer>
      <FragmentBody $collected={collected} onClick={handleCollect}>
        <FragmentLabel>Phase Fragment {fragmentNumber}/5</FragmentLabel>
        <FragmentText $collected={collected}>
          "{fragment.text}"
        </FragmentText>
        {collected && <CollectedBadge>✓ Fragment collected</CollectedBadge>}
      </FragmentBody>
    </FragmentContainer>
  );
};

// Display all collected fragments assembled together
export const AssembledFragments = () => {
  const collected = getCollectedFragments();
  const collectedCount = Object.keys(collected).length;

  if (collectedCount === 0) return null;

  return (
    <FragmentContainer>
      <FragmentLabel>Phase Fragments ({collectedCount}/5)</FragmentLabel>
      {[1, 2, 3, 4, 5].map(n => (
        collected[n] ? (
          <FragmentText key={n} $collected={false} style={{ marginBottom: '0.75rem', fontSize: '0.85rem' }}>
            Phase {n}: "{PHASE_FRAGMENTS[n].text}"
          </FragmentText>
        ) : (
          <FragmentText key={n} $collected={true} style={{ marginBottom: '0.75rem', fontSize: '0.85rem' }}>
            Phase {n}: [Not yet found]
          </FragmentText>
        )
      ))}
    </FragmentContainer>
  );
};

export const getPhaseFragmentCount = () => Object.keys(getCollectedFragments()).length;

export default PhaseFragment;
