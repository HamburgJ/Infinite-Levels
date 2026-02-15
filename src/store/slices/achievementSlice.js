import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  achievements: {},
  hasUnlockedAny: false,
  recentAchievements: [],
  hasNewAchievements: false,
  visitedShrines: {},
  newlyOpenableShrines: []
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
    },
    recordShrineVisit: (state, action) => {
      const { level, requiredCount, teaserText } = action.payload;
      const key = String(level);
      if (!state.visitedShrines[key]) {
        state.visitedShrines[key] = {
          level: key,
          requiredCount,
          teaserText: teaserText || null,
          firstSeenAt: new Date().toISOString(),
          opened: false
        };
      }
    },
    markShrineOpened: (state, action) => {
      const key = String(action.payload);
      if (state.visitedShrines[key]) {
        state.visitedShrines[key].opened = true;
      }
    },
    addNewlyOpenableShrine: (state, action) => {
      const level = String(action.payload);
      if (!state.newlyOpenableShrines.includes(level)) {
        state.newlyOpenableShrines.push(level);
      }
    },
    clearNewlyOpenableShrine: (state) => {
      if (state.newlyOpenableShrines.length > 0) {
        state.newlyOpenableShrines.shift();
      }
    }
  }
});

export const { addAchievement, clearRecentAchievement, markAchievementsSeen, recordShrineVisit, markShrineOpened, addNewlyOpenableShrine, clearNewlyOpenableShrine } = achievementSlice.actions;
export default achievementSlice.reducer; 