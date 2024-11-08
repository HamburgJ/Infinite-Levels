import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAchievements } from './useAchievements';

export const useBacktrackingAchievement = () => {
  const levelHistory = useSelector(state => state.game.levelHistory);
  const { unlockAchievement } = useAchievements();

  useEffect(() => {
    if (!levelHistory.length) return;

    const countVisits = (targetLevel) => {
      const formatLevel = (level) => {
        if (typeof level === 'number') return JSON.stringify({ real: level, imag: 0 });
        if (typeof level === 'object') return JSON.stringify(level);
        return level;
      };

      const formattedTarget = formatLevel(targetLevel);
      let visits = 0;
      let lastLevel = null;

      for (const level of levelHistory) {
        const formattedLevel = formatLevel(level);
        if (formattedLevel === formattedTarget && formattedLevel !== lastLevel) {
          visits++;
        }
        lastLevel = formattedLevel;
      }

      return visits;
    };

    // Check each unique level in history
    const uniqueLevels = new Set(levelHistory.map(level => 
      typeof level === 'object' ? JSON.stringify(level) : level
    ));

    uniqueLevels.forEach(levelStr => {
      const level = levelStr.startsWith('{') ? JSON.parse(levelStr) : levelStr;
      if (countVisits(level) >= 5) {
        unlockAchievement('BACKTRACKER');
      }
    });
  }, [levelHistory, unlockAchievement]);
}; 