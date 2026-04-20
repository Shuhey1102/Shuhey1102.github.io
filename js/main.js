'use strict';

// get user's locale and set lang attribute
const lang = navigator.language.startsWith('ja') ? 'ja' : 'en';
document.documentElement.lang = lang;

// change text content based on locale
fetch(`./locales/${lang}.json`)
  .then(res => res.json())
  .then(data => {
    document.querySelectorAll('[data-text]').forEach(el => {
      const key = el.dataset.text;
      if (data[key]) {
        el.textContent = data[key];
      }
    });
  });