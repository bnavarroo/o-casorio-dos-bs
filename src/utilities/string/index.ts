export const randomString = (size = 8) => {
  let result = '';
  const c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < size; i += 1) {
    result += c.charAt(Math.floor(Math.random() * c.length));
  }

  return result;
};
