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
    addAchievement: {
      reducer: (state, action) => {
        const { id, title, description, emoji, timestamp } = action.payload;
        if (!state.achievements[id]) {
          state.achievements[id] = {
            title,
            description,
            emoji,
            unlocked: true,
            unlockedAt: timestamp
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
      prepare: (payload) => ({
        payload: { ...payload, timestamp: new Date().toISOString() }
      })
    },
    clearRecentAchievement: (state) => {
      if (state.recentAchievements.length > 0) {
        state.recentAchievements.shift(); // Remove oldest achievement
      }
    },
    clearRecentAchievementById: (state, action) => {
      const id = action.payload;
      state.recentAchievements = state.recentAchievements.filter(a => a.id !== id);
    },
    markAchievementsSeen: (state) => {
      state.hasNewAchievements = false;
    },
    recordShrineVisit: {
      reducer: (state, action) => {
        const { level, requiredCount, teaserText, timestamp } = action.payload;
        const key = String(level);
        if (!state.visitedShrines[key]) {
          state.visitedShrines[key] = {
            level: key,
            requiredCount,
            teaserText: teaserText || null,
            firstSeenAt: timestamp,
            opened: false
          };
        }
      },
      prepare: (payload) => ({
        payload: { ...payload, timestamp: new Date().toISOString() }
      })
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
    },
    purifyAchievements: (state) => {
      state.achievements = {};
      state.hasUnlockedAny = false;
      state.recentAchievements = [];
      state.hasNewAchievements = false;
      state.visitedShrines = {};
      state.newlyOpenableShrines = [];
    }
  }
});

export const { addAchievement, clearRecentAchievement, clearRecentAchievementById, markAchievementsSeen, recordShrineVisit, markShrineOpened, addNewlyOpenableShrine, clearNewlyOpenableShrine, purifyAchievements } = achievementSlice.actions;
export default achievementSlice.reducer; 