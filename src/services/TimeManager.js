import { StabilityManager } from './StabilityManager';
import store from '../store';
import { updateLevelStability } from '../store/slices/levelSlice';

class TimeManager {
  constructor() {
    this.timeBasedLevels = new Map();
    this.clockSubscribers = new Set();
    this.activeTimers = new Map();
    this.currentTime = new Date();
    
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    this.currentTime = new Date();
    this.updateStore();
    this.checkTimeBasedLevels();
    this.notifySubscribers();
  }

  updateStore() {
    store.dispatch({
      type: 'timeBasedElements/updateClock',
      payload: {
        hours: this.currentTime.getHours(),
        minutes: this.currentTime.getMinutes()
      }
    });
  }

  checkTimeBasedLevels() {
    const state = store.getState();
    const inventory = state.inventory.items;

    for (const [level, config] of this.timeBasedLevels) {
      const hasToken = inventory.some(item => 
        item.type === 'levelToken' && item.value === level
      );

      if (!hasToken && !this.isLevelAccessible(level)) {
        store.dispatch(updateLevelStability({
          levelId: level,
          isStable: false
        }));
      }
    }
  }

  startLevelTimer(levelId, duration) {
    const timer = setTimeout(() => {
      this.destabilizeLevel(levelId);
    }, duration);
    
    this.activeTimers.set(levelId, timer);
    this.addTimeBasedLevel(levelId, duration);
  }

  destabilizeLevel(levelId) {
    store.dispatch(updateLevelStability({
      levelId,
      isStable: false
    }));
  }

  addTimeBasedLevel(level, duration) {
    this.timeBasedLevels.set(level, {
      startTime: Date.now(),
      duration,
      expiryTime: Date.now() + duration
    });
    StabilityManager.addTimeBasedLevel(level, duration);
  }

  subscribeToTimeUpdates(callback) {
    this.clockSubscribers.add(callback);
    return () => this.clockSubscribers.delete(callback);
  }

  notifySubscribers() {
    this.clockSubscribers.forEach(callback => {
      callback(this.currentTime);
    });
  }

  isLevelAccessible(level) {
    if (!StabilityManager.isLevelStable(level)) {
      return false;
    }

    const hours = this.currentTime.getHours();
    
    if (level >= 1 && level <= 12) {
      return hours === level || hours === level + 12;
    }
    
    if (this.timeBasedLevels.has(level)) {
      const { expiryTime } = this.timeBasedLevels.get(level);
      return Date.now() < expiryTime;
    }

    return true;
  }
}

export default new TimeManager(); 