import { store } from '../store';
import { equipItem } from '../store/slices/inventorySlice';

class WalletSystem {
  constructor() {
    this.denominations = new Map([
      [1, { levels: [1] }],        // 1¢
      [5, { levels: [5] }],        // 5¢
      [10, { levels: [10] }],      // 10¢
      [25, { levels: [25] }],      // 25¢
      [500, { levels: [5] }],      // $5
      [1000, { levels: [10] }],    // $10
      [2000, { levels: [20] }],    // $20
      [5000, { levels: [50] }],    // $50
      [10000, { levels: [100] }]   // $100
    ]);
  }

  collectMoney(denomination) {
    const config = this.denominations.get(denomination);
    if (!config) return;

    config.levels.forEach(level => {
      store.dispatch(equipItem({
        type: 'levelToken',
        value: level,
        source: 'wallet',
        id: `level-${level}-${Date.now()}`
      }));
    });
  }
}

export default new WalletSystem(); 