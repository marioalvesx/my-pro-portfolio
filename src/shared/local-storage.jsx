export const writeOnLocalStorage = (id, value) => {
  localStorage.setItem(id, JSON.stringify(value));
};

export const getLocalStorageItem = (id) => {
  try {
    const valueString = localStorage.getItem(id);
    const value = JSON.parse(valueString);
    return value;
  } catch {
    return null;
  }
};
