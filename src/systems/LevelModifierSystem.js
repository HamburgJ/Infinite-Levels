class LevelModifierSystem {
  constructor() {
    this.modifiers = new Map([
      ['multiply', (level, factor) => level * factor],
      ['add', (level, value) => level + value],
      ['complex', (level, operation) => {
        if (typeof level === 'number') {
          level = { real: level, imag: 0 };
        }
        return operation(level);
      }]
    ]);
  }

  applyModifier(level, modifierType, value) {
    const modifier = this.modifiers.get(modifierType);
    if (!modifier) return level;
    return modifier(level, value);
  }

  combineModifiers(modifiers) {
    return (level) => {
      return modifiers.reduce((result, mod) => {
        return this.applyModifier(result, mod.type, mod.value);
      }, level);
    };
  }
}

export default new LevelModifierSystem(); 