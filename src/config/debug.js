const forceProduction = true; // Set to false to re-enable debug mode in dev

const debugConfig = {
  isDebugMode: !forceProduction && process.env.NODE_ENV === 'development',
  debugFeatures: {
    enableLevelInput: !forceProduction && process.env.NODE_ENV === 'development',
    unlockAllShrines: !forceProduction && process.env.NODE_ENV === 'development',
    startAtDemoLevel: !forceProduction && process.env.NODE_ENV === 'development'
  }
};

export default debugConfig; 