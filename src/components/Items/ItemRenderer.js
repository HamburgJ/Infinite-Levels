import React from 'react';
import { FaKey, FaBook, FaBox } from 'react-icons/fa';
import { CollectibleLevelButton } from '../UI/SharedStyles';
import WalletItem from './WalletItem';
import styled from 'styled-components';
import { getCardComponent } from './SpecialCards';
import CARDS from '../../data/cards';

const TextItem = styled.div`
  font-size: 14px;
  padding: 4px 8px;
  background: rgb(0, 96, 238);
  color: white;
  border-radius: 4px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all 0.2s;
  
  &:hover {
    background: rgb(0, 78, 194);
  }
`;

const PlayingCard = styled.div`
  width: 40px;
  height: 60px;
  background: ${props => {
    switch (props.cardType) {
      case 'dark-holographic':
        return 'linear-gradient(135deg, #1a1a1a, #333)';
      case 'gold-shiny':
        return 'linear-gradient(135deg, #ffd700, #b8860b)';
      case 'diamond':
        return 'linear-gradient(135deg, #e3f2fd, #90caf9)';
      default:
        return 'white';
    }
  }};
  border: 2px solid ${props => {
    switch (props.cardType) {
      case 'dark-holographic':
        return '#444';
      case 'gold-shiny':
        return '#966b00';
      case 'diamond':
        return '#42a5f5';
      default:
        return '#000';
    }
  }};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${props => {
    switch (props.cardType) {
      case 'dark-holographic':
        return '#fff';
      case 'gold-shiny':
        return '#442c00';
      case 'diamond':
        return '#1565c0';
      default:
        return props.suit === 'hearts' || props.suit === 'diamonds' ? 'red' : 'black';
    }
  }};
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1;
`;

const CurrencyIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
`;

const SmallCoin = styled(CurrencyIcon)`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  background: ${props => {
    switch (props.value) {
      case 25: return 'linear-gradient(135deg, #C0C0C0, #E8E8E8)';
      case 10: return 'linear-gradient(135deg, #CD7F32, #E6B17F)';
      case 5: return 'linear-gradient(135deg, #CD7F32, #E6B17F)';
      default: return 'linear-gradient(135deg, #CD7F32, #E6B17F)';
    }
  }};
  border: 1px solid ${props => {
    switch (props.value) {
      case 25: return '#A0A0A0';
      case 10: return '#8B4513';
      case 5: return '#8B4513';
      default: return '#8B4513';
    }
  }};
  color: ${props => props.value >= 25 ? '#404040' : '#663300'};
`;

const SmallBill = styled(CurrencyIcon)`
  width: 2.2rem;
  height: 1.3rem;
  border-radius: 2px;
  background: ${props => {
    switch (props.value) {
      case 10000: return 'linear-gradient(135deg, #849F84, #C1D9C1)';
      case 5000: return 'linear-gradient(135deg, #E68A00, #FFB84D)';
      case 2000: return 'linear-gradient(135deg, #008055, #00B377)';
      case 1000: return 'linear-gradient(135deg, #666699, #8585AD)';
      default: return 'linear-gradient(135deg, #85AD85, #B3D1B3)';
    }
  }};
  border: 1px solid ${props => {
    switch (props.value) {
      case 10000: return '#5C705C';
      case 5000: return '#B36B00';
      case 2000: return '#004D33';
      case 1000: return '#40406B';
      default: return '#5C705C';
    }
  }};
  color: #FFF;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
`;

const ItemRenderer = ({ item, onWalletClick, onEncyclopediaClick }) => {
  if (!item) return null;

  switch (item.type) {
    case 'key':
      return <FaKey style={{ fontSize: '2rem', color: 'gold' }} />;
    case 'levelButton':
      return (
        <CollectibleLevelButton variant={item.variant} small>
          {item.value}
        </CollectibleLevelButton>
      );
    case 'wallet':
      return <WalletItem onWalletClick={onWalletClick} />;
    case 'encyclopedia':
      return <FaBook style={{ fontSize: '1.5rem' }} onClick={onEncyclopediaClick} />;
    case 'card-box':
      return <FaBox style={{ fontSize: '1.5rem' }} />;
    case 'card':
      return (
        <PlayingCard 
          cardType={CARDS[item.id].rarity}
          suit={item.suit}
        >
          {item.value} {item.suit === 'hearts' ? '♥' : 
           item.suit === 'diamonds' ? '♦' : 
           item.suit === 'clubs' ? '♣' : '♠'}
        </PlayingCard>
      );
    case 'text':
      return <TextItem>{item.content}</TextItem>;
    case 'diamond':
      return <span style={{ fontSize: '2rem' }}>💎</span>;
    case 'black-hole':
      return <span style={{ fontSize: '2rem' }}>🕳️</span>;
    case 'currency':
      const CurrencyComponent = item.value >= 500 ? SmallBill : SmallCoin;
      const displayValue = item.value >= 500 ? `$${item.value/100}` : `${item.value}¢`;
      return (
        <CurrencyComponent value={item.value}>
          {displayValue}
        </CurrencyComponent>
      );
    case 'flower':
      return (
        <div style={{ 
          fontSize: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          {item.stage}
        </div>
      );
    default:
      return null;
  }
};

export default ItemRenderer; 