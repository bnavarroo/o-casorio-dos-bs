import { useState, useEffect } from 'react';

export const useDebounce = <T>(value: T, delay: number, defaultValue: T) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    setDebouncedValue(value);
    const handler = setTimeout(() => {
      setDebouncedValue(defaultValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, defaultValue]);

  return debouncedValue;
};
