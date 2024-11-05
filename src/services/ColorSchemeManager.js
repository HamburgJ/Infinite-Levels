export class ColorSchemeManager {
  getColorScheme(levelNumber) {
    // Handle complex numbers
    if (typeof levelNumber === 'object' && 'real' in levelNumber) {
      return this.getComplexColorScheme(levelNumber);
    }
    
    // Handle negative real numbers
    if (levelNumber < 0) {
      return this.getNegativeColorScheme();
    }
    
    // Handle zero and positive real numbers
    return this.getPositiveColorScheme();
  }

  getComplexColorScheme({ real, imag }) {
    const angle = Math.atan2(imag, real);
    const magnitude = Math.sqrt(real * real + imag * imag);
    
    return {
      primary: this.getColorFromAngle(angle),
      intensity: this.getIntensityFromMagnitude(magnitude)
    };
  }

  getNegativeColorScheme() {
    return {
      primary: '#000000',
      secondary: '#ffffff',
      background: '#1a1a1a',
      text: '#ffffff',
      border: 'rgba(255, 255, 255, 0.1)'
    };
  }

  getPositiveColorScheme() {
    return {
      primary: '#ffffff',
      secondary: '#000000',
      background: '#ffffff',
      text: '#000000',
      border: 'rgba(0, 0, 0, 0.1)'
    };
  }

  getColorFromAngle(angle) {
    const hue = ((angle + Math.PI) / (2 * Math.PI)) * 360;
    return `hsl(${hue}, 70%, 60%)`;
  }

  getIntensityFromMagnitude(magnitude) {
    return Math.min(Math.max(magnitude / 10, 0.3), 1);
  }
} 