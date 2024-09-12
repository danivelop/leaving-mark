function appendThemeMeta() {
  const themeMeta = document.createElement('meta');
  themeMeta.name = 'theme-color';
  document.head.appendChild(themeMeta);

  return themeMeta;
}

function setThemeColor(color: string) {
  const themeMeta = (() => {
    const currentThemeMeta = document.querySelector('meta[name="theme-color"]');
    if (currentThemeMeta) {
      return currentThemeMeta as HTMLMetaElement;
    }
    return appendThemeMeta();
  })();

  themeMeta.content = color;
}

export function getDarkMode() {
  if (typeof window === 'undefined') {
    return false;
  }

  const localStorageValue = window.localStorage.getItem('darkMode');
  if (localStorageValue) {
    return JSON.parse(localStorageValue) as boolean;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function setDarkMode(darkMode: boolean) {
  window.localStorage.setItem('darkMode', `${darkMode}`);
  document.documentElement.classList.remove(darkMode ? 'light' : 'dark');
  document.documentElement.classList.add(darkMode ? 'dark' : 'light');

  setThemeColor(darkMode ? '#18181b' : '#ffffff');
}
