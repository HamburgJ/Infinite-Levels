/**
 * tutorialSlice — Manages the guided-tutorial state.
 *
 * Tracks which tutorial steps the player has seen, and controls
 * the active TutorialSpotlight overlay.
 *
 * Tutorial steps fire automatically based on game events (first
 * achievement, first shrine, first quest progress, etc.).
 */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  /** Currently displayed spotlight (null = none) */
  activeSpotlight: null,

  /**
   * Set of step IDs the player has already dismissed.
   * Persisted via the existing localStorage middleware.
   */
  completedSteps: [],

  /** Queue of pending spotlights (shown one at a time) */
  queue: [],
};

const tutorialSlice = createSlice({
  name: 'tutorial',
  initialState,
  reducers: {
    /**
     * Show a spotlight immediately (or queue it if one is visible).
     * payload: { id, target, message, emoji?, placement? }
     */
    showSpotlight: (state, action) => {
      const step = action.payload;
      // Don't re-show steps the player already dismissed
      if (state.completedSteps.includes(step.id)) return;

      if (state.activeSpotlight) {
        // Queue if one is already showing
        if (!state.queue.find(q => q.id === step.id)) {
          state.queue.push(step);
        }
      } else {
        state.activeSpotlight = step;
      }
    },

    /** Dismiss the current spotlight and show next queued one */
    dismissSpotlight: (state) => {
      if (state.activeSpotlight) {
        if (!state.completedSteps.includes(state.activeSpotlight.id)) {
          state.completedSteps.push(state.activeSpotlight.id);
        }
      }
      state.activeSpotlight = state.queue.length > 0 ? state.queue.shift() : null;
    },

    /** Force-clear everything (e.g. on restart) */
    resetTutorial: (state) => {
      state.activeSpotlight = null;
      state.queue = [];
      state.completedSteps = [];
    },
  },
});

export const { showSpotlight, dismissSpotlight, resetTutorial } = tutorialSlice.actions;
export default tutorialSlice.reducer;
