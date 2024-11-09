import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  achievements: {},
  hasUnlockedAny: false,
  recentAchievements: [],
  hasNewAchievements: false
};

const achievementSlice = createSlice({
  name: 'achievements',
  initialState,
  reducers: {
    addAchievement: (state, action) => {
      const { id, title, description, emoji } = action.payload;
      if (!state.achievements[id]) {
        state.achievements[id] = {
          title,
          description,
          emoji,
          unlocked: true,
          unlockedAt: new Date().toISOString()
        };
        state.hasUnlockedAny = true;
        state.hasNewAchievements = true;
        state.recentAchievements.push({
          id,
          title,
          description,
          emoji
        });
      }
    },
    clearRecentAchievement: (state) => {
      if (state.recentAchievements.length > 0) {
        state.recentAchievements.shift(); // Remove oldest achievement
      }
    },
    markAchievementsSeen: (state) => {
      state.hasNewAchievements = false;
    }
  }
});

export const { addAchievement, clearRecentAchievement, markAchievementsSeen } = achievementSlice.actions;
export default achievementSlice.reducer; 