export const generateKey = () => {
  return Date.now().toString(32) + Math.random().toString(32).substring(2);
};
