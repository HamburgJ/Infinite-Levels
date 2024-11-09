import { logPageView } from '../../utils/analytics';
import { levelToString } from '../../utils/complex';
import debugConfig from '../../config/debug';

export const analyticsMiddleware = store => next => action => {
  const result = next(action);
  
  if (action.type === 'game/setCurrentLevel') {
    if (!debugConfig.isDebugMode) {
      const level = action.payload;
      const formattedLevel = levelToString(level);
      logPageView(formattedLevel);
    }
  }
  
  return result;
}; 