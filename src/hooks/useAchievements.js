import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addAchievement } from '../store';
import achievements from '../data/achievements';

export const useAchievements = () => {
  const dispatch = useDispatch();

  const unlockAchievement = useCallback((achievementId) => {
    if (achievements[achievementId]) {
      dispatch(addAchievement(achievements[achievementId]));
    }
  }, [dispatch]);

  return { unlockAchievement, achievements };
}; 