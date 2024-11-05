import { Complex } from '../utils/complex';
import StabilityManager from '../services/StabilityManager';
import TimeController from '../controllers/TimeController';

class LevelTransitionSystem {
  constructor() {
    this.transitionHandlers = new Map([
      ['normal', this.handleNormalTransition],
      ['complex', this.handleComplexTransition],
      ['time', this.handleTimeBasedTransition]
    ]);
  }

  async transition(from, to, type = 'normal') {
    const handler = this.transitionHandlers.get(type);
    if (!handler) return false;

    return handler.call(this, from, to);
  }

  handleNormalTransition(from, to) {
    if (!StabilityManager.isLevelStable(to)) {
      return StabilityManager.findNearestStableLevel(to);
    }
    return to;
  }

  handleComplexTransition(from, to) {
    const complexTo = Complex.getNearestInteger(to);
    return this.handleNormalTransition(from, complexTo);
  }

  handleTimeBasedTransition(from, to) {
    if (!TimeController.isLevelAccessible(to)) {
      return from; // Stay at current level if target isn't accessible
    }
    return this.handleNormalTransition(from, to);
  }
}

export default new LevelTransitionSystem(); 