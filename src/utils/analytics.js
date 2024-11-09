import ReactGA from 'react-ga4';
import analyticsConfig from '../config/analytics';
import debugConfig from '../config/debug';

const config = process.env.NODE_ENV === 'production' 
  ? analyticsConfig.production 
  : analyticsConfig.development;

export const initGA = () => {
  if (!config.enabled && debugConfig.isDebugMode) {
    console.log('Analytics disabled in debug mode');
    return;
  }

  ReactGA.initialize(config.measurementId, {
    gaOptions: {
      debug_mode: debugConfig.isDebugMode
    }
  });
};

export const logPageView = (level) => {
  if (!config.enabled && debugConfig.isDebugMode) return;

  // Handle different level types (number, complex, string)
  const formattedLevel = typeof level === 'object' 
    ? `complex/${level.real},${level.imag}` 
    : `level/${level}`;

  ReactGA.send({
    hitType: "pageview",
    page: `/${formattedLevel}`,
    title: `Level ${level}`
  });
}; 