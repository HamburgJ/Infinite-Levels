import ComplexNumberManager from './ComplexNumberManager';

class StabilityManager {
  constructor() {
    this.stableLevels = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    this.timeBasedLevels = new Map();
  }

  isLevelStable(level) {
    // Handle complex numbers
    if (typeof level === 'object' && 'real' in level) {
      return ComplexNumberManager.isStable(level);
    }

    // Handle time-based levels
    if (this.timeBasedLevels.has(level)) {
      const { startTime, duration } = this.timeBasedLevels.get(level);
      const now = Date.now();
      return now >= startTime && now < startTime + duration;
    }

    // Handle negative numbers
    if (level < 0) {
      return this.stableLevels.has(Math.abs(level));
    }

    return this.stableLevels.has(level);
  }

  findNearestStableLevel(currentLevel) {
    if (typeof currentLevel === 'object' && 'real' in currentLevel) {
      return ComplexNumberManager.findNearestStableLevel(currentLevel);
    }

    const stableLevels = Array.from(this.stableLevels);
    return stableLevels.reduce((nearest, level) => {
      const currentDiff = Math.abs(currentLevel - nearest);
      const newDiff = Math.abs(currentLevel - level);
      return newDiff < currentDiff ? level : nearest;
    }, stableLevels[0]);
  }

  addTimeBasedLevel(level, duration) {
    this.timeBasedLevels.set(level, {
      startTime: Date.now(),
      duration
    });
  }

  removeLevel(level) {
    this.stableLevels.delete(level);
    this.timeBasedLevels.delete(level);
  }
}

export default new StabilityManager(); 