'use strict';
import {messages} from './message.js';

// get user's locale and set lang attribute
const lang = navigator.language.startsWith('ja') ? 'ja' : 'en';
document.documentElement.lang = lang;


window.onload = () => {
    // change text content based on locale
    document.querySelectorAll('[data-text]').forEach(el => {
      const key = el.dataset.text;
      if (messages[lang][key]) {
        el.textContent = messages[lang][key];
      }
    });
}
