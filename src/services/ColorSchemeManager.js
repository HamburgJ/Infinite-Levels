export class ColorSchemeManager {
  getColorScheme(levelNumber) {
    // Handle complex numbers
    if (typeof levelNumber === 'object' && 'real' in levelNumber) {
      return this.getComplexColorScheme(levelNumber);
    }
    
    // Handle negative real numbers
    if (levelNumber < 0) {
      return this.getNegativeColorScheme(levelNumber);
    }
    
    // Handle zero and positive real numbers
    return this.getPositiveColorScheme(levelNumber);
  }

  getComplexColorScheme({ real, imag }) {
    const angle = Math.atan2(imag, real);
    const magnitude = Math.sqrt(real * real + imag * imag);
    
    return {
      primary: this.getColorFromAngle(angle),
      intensity: this.getIntensityFromMagnitude(magnitude),
      accent: this.getAccentColor(magnitude, angle),
    };
  }

  getNegativeColorScheme(level = -1) {
    const mag = Math.abs(typeof level === 'number' ? level : 1);
    const hue = (mag * 0.7 + 180) % 360;
    const sat = Math.min(Math.log10(Math.max(mag, 1)) * 4, 15);
    
    return {
      primary: '#000000',
      secondary: '#ffffff',
      background: '#1a1a1a',
      text: '#ffffff',
      border: 'rgba(255, 255, 255, 0.1)',
      accent: `hsl(${hue}, ${sat}%, 25%)`,
    };
  }

  getPositiveColorScheme(level = 1) {
    const mag = Math.abs(typeof level === 'number' ? level : 1);
    const hue = (mag * 0.7) % 360;
    const sat = Math.min(Math.log10(Math.max(mag, 1)) * 3, 12);
    
    return {
      primary: '#ffffff',
      secondary: '#000000',
      background: '#ffffff',
      text: '#000000',
      border: 'rgba(0, 0, 0, 0.1)',
      accent: `hsl(${hue}, ${sat}%, 90%)`,
    };
  }

  getColorFromAngle(angle) {
    const hue = ((angle + Math.PI) / (2 * Math.PI)) * 360;
    return `hsl(${hue}, 70%, 60%)`;
  }

  getIntensityFromMagnitude(magnitude) {
    return Math.min(Math.max(magnitude / 10, 0.3), 1);
  }

  // Generate an accent color that varies with level magnitude
  getAccentColor(magnitude, angle = 0) {
    const hue = ((angle + Math.PI) / (2 * Math.PI)) * 360;
    const sat = Math.min(40 + magnitude * 2, 80);
    const light = Math.max(70 - magnitude, 40);
    return `hsl(${hue}, ${sat}%, ${light}%)`;
  }
} 