async function setTheme(theme) {
  const link = document.querySelector('head > link[rel="stylesheet"]');
  link.href = `/css/${theme}.css`;
}