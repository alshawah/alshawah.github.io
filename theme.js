// Restore the theme before displaying the page.
let theme = 'light';
try {
  if (localStorage.getItem('theme') === 'dark') theme = 'dark';
} catch (error) { /* The site still works when storage is disabled. */ }
document.documentElement.dataset.theme = theme;
