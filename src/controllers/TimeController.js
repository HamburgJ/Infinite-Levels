class TimeController {
  constructor() {
    this.clockSubscribers = new Set();
    this.timeBasedLevels = new Map();
    
    // Start global clock update
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock() {
    const now = new Date();
    this.notifySubscribers(now);
    this.checkTimeBasedLevels(now);
  }

  subscribeToClockUpdates(callback) {
    this.clockSubscribers.add(callback);
    return () => this.clockSubscribers.delete(callback);
  }

  notifySubscribers(time) {
    this.clockSubscribers.forEach(callback => callback(time));
  }

  isLevelAccessible(level) {
    const now = new Date();
    const hour = now.getHours() % 12 || 12; // Convert 24h to 12h format
    
    // Levels 1-12 are accessible when current hour matches
    if (level >= 1 && level <= 12) {
      return level === hour;
    }
    
    return true;
  }

  addTimeBasedLevel(level, duration) {
    this.timeBasedLevels.set(level, {
      startTime: Date.now(),
      duration
    });
  }

  checkTimeBasedLevels(now) {
    for (const [level, config] of this.timeBasedLevels) {
      const elapsed = now - config.startTime;
      if (elapsed > config.duration) {
        this.destabilizeLevel(level);
      }
    }
  }

  destabilizeLevel(level) {
    // Implementation will use StabilityManager
  }
}

export default new TimeController(); 