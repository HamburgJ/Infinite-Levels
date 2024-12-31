import ReactGA from 'react-ga4';
import analyticsConfig from '../config/analytics';
import debugConfig from '../config/debug';

const config = process.env.NODE_ENV === 'production' 
  ? analyticsConfig.production 
  : analyticsConfig.development;

export const initGA = () => {
  // Don't initialize if analytics is disabled or measurement ID is missing
  if (!config.enabled || !config.measurementId) {
    if (debugConfig.isDebugMode) {
      console.log('Analytics disabled or measurement ID missing');
    }
    return;
  }

  try {
    ReactGA.initialize(config.measurementId, {
      gaOptions: {
        debug_mode: debugConfig.isDebugMode
      }
    });
    // Send initial pageview
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Infinite Levels - Complex Number Puzzle Game"
    });
  } catch (error) {
    if (debugConfig.isDebugMode) {
      console.warn('Failed to initialize Google Analytics:', error);
    }
  }
};

export const logPageView = (level) => {
  // Don't log if analytics is disabled or not initialized
  if (!config.enabled || !config.measurementId) return;

  try {
    // Handle different level types (number, complex, string)
    const formattedLevel = typeof level === 'object' 
      ? `complex/${level.real},${level.imag}` 
      : `level/${level}`;

    ReactGA.send({
      hitType: "pageview",
      page: `/${formattedLevel}`,
      title: `Infinite Levels - Level ${level}`
    });
  } catch (error) {
    if (debugConfig.isDebugMode) {
      console.warn('Failed to log page view:', error);
    }
  }
}; 