let counter = 0;

export const generateUniqueId = (prefix) => {
  counter++;
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}-${counter}`;
}; 