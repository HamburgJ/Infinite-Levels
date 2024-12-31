const analyticsConfig = {
  development: {
    measurementId: process.env.CF_GA_ID || process.env.VITE_GA_ID || process.env.REACT_APP_GA_ID,
    enabled: true
  },
  production: {
    measurementId: process.env.CF_GA_ID || process.env.VITE_GA_ID || process.env.REACT_APP_GA_ID,
    enabled: true
  }
};

export default analyticsConfig; 