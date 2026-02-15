/**
 * Browser History Middleware
 * 
 * Enables browser back/forward button support by pushing
 * level changes to the browser history stack.
 * 
 * Uses a module-level flag to prevent infinite loops when
 * navigating via popstate (back button).
 */

let isNavigatingFromHistory = false;

export const setNavigatingFromHistory = (value) => { 
  isNavigatingFromHistory = value; 
};

export const historyMiddleware = store => next => action => {
  const result = next(action);
  
  if (action.type === 'game/setCurrentLevel' && !isNavigatingFromHistory) {
    const state = store.getState();
    try {
      window.history.pushState({ level: state.game.currentLevel }, '');
    } catch (e) {
      // Silently fail if pushState is not available
    }
  }
  
  isNavigatingFromHistory = false;
  return result;
};
