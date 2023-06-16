export const setItem = (key: string, value: {}) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key: string) => {
  const value = window.localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
};
