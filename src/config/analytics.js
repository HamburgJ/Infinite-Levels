const analyticsConfig = {
  development: {
    measurementId: process.env.REACT_APP_GA_ID,
    enabled: false
  },
  production: {
    measurementId: process.env.REACT_APP_GA_ID,
    enabled: true
  }
};

export default analyticsConfig; 