const debugConfig = {
  isDebugMode: process.env.NODE_ENV === 'development',
  debugFeatures: {
    enableLevelInput: process.env.NODE_ENV === 'development',
    unlockAllShrines: process.env.NODE_ENV === 'development',
    startAtDemoLevel: process.env.NODE_ENV === 'development'
  }
};

export default debugConfig; 