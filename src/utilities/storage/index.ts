import { TStringMap } from '@shared/types/_globals';

const storage = sessionStorage;

export const getFromStorage = (key: string) => {
  const value = storage.getItem(key);
  try {
    const parsedValue: TStringMap | null = JSON.parse(value as string);
    return parsedValue;
  } catch {
    return value;
  }
};

export const removeFromStorage = (key: string) => {
  storage.removeItem(key);
};

export const setToStorage = (key: string, value: unknown) => {
  const formattedValue =
    typeof value === 'object' ? JSON.stringify(value) : value;
  storage.setItem(key, formattedValue as string);
};

export const clearStorage = () => {
  storage.clear();
};
