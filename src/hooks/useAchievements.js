import { useDispatch } from 'react-redux';
import { addAchievement } from '../store';
import achievements from '../data/achievements';

export const useAchievements = () => {
  const dispatch = useDispatch();

  const unlockAchievement = (achievementId) => {
    if (achievements[achievementId]) {
      dispatch(addAchievement(achievements[achievementId]));
    }
  };

  return { unlockAchievement, achievements };
}; 