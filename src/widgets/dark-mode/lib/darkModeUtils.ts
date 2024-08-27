export function getDarkMode() {
  if (typeof window === 'undefined') {
    return false;
  }

  const localStorageValue = window.localStorage.getItem('darkMode');
  if (localStorageValue) {
    return JSON.parse(localStorageValue);
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function setDarkMode(darkMode: boolean) {
  window.localStorage.setItem('darkMode', `${darkMode}`);
  document.documentElement.classList.remove(darkMode ? 'light' : 'dark');
  document.documentElement.classList.add(darkMode ? 'dark' : 'light');
}
