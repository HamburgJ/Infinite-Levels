import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  achievements: {},
  hasUnlockedAny: false,
  recentAchievement: null,
  hasNewAchievements: false
};

const achievementSlice = createSlice({
  name: 'achievements',
  initialState,
  reducers: {
    addAchievement: (state, action) => {
      const { id, title, description } = action.payload;
      if (!state.achievements[id]) {
        state.achievements[id] = {
          title,
          description,
          unlocked: true,
          unlockedAt: new Date().toISOString()
        };
        state.hasUnlockedAny = true;
        state.hasNewAchievements = true;
        state.recentAchievement = {
          id,
          title,
          description
        };
      }
    },
    clearRecentAchievement: (state) => {
      state.recentAchievement = null;
    },
    markAchievementsSeen: (state) => {
      state.hasNewAchievements = false;
    }
  }
});

export const { addAchievement, clearRecentAchievement, markAchievementsSeen } = achievementSlice.actions;
export default achievementSlice.reducer; 