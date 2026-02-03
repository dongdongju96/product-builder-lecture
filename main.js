import { init3DHero } from './3d-hero.js';

class ThemeToggle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.STORAGE_KEY = 'theme-preference';

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-color);
        }
        button:hover {
          background-color: var(--card-bg);
        }
        .icon {
          font-family: 'Material Symbols Outlined';
          font-size: 1.5rem;
        }
      </style>
      <button aria-label="Toggle theme">
        <span class="icon"></span>
      </button>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.button = this.shadowRoot.querySelector('button');
    this.icon = this.shadowRoot.querySelector('.icon');

    this.theme = this.getThemePreference();
    this.setTheme();

    this.button.addEventListener('click', () => {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      this.setTheme();
    });
  }

  setTheme() {
    document.body.dataset.theme = this.theme;
    localStorage.setItem(this.STORAGE_KEY, this.theme);
    this.icon.textContent = this.theme === 'dark' ? 'light_mode' : 'dark_mode';
  }

  getThemePreference() {
    const storedPref = localStorage.getItem(this.STORAGE_KEY);
    if (storedPref) {
      return storedPref;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
customElements.define('theme-toggle', ThemeToggle);


document.addEventListener('DOMContentLoaded', () => {
  // Navigation
  const navLinks = document.querySelectorAll('nav a');
  const currentPath = window.location.pathname === '/' ? '/index.html' : window.location.pathname;

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href') === '/' ? '/index.html' : link.getAttribute('href');
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });

  // 3D Hero
  const heroCanvas = document.getElementById('hero-canvas');
  if (heroCanvas) {
    init3DHero(heroCanvas);
  }
});

class GuidelineChecklist extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        ul {
          list-style: none;
          padding: 0;
          text-align: left;
        }
        li {
          padding: 0.75rem 1rem;
          margin: 0.5rem 0;
          background-color: var(--background-color);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out;
          display: flex;
          align-items: center;
          color: var(--text-color);
        }
        li:hover {
          background-color: var(--header-bg);
        }
        li.checked {
          background-color: #d4edda;
          text-decoration: line-through;
          color: #155724;
        }
        .icon {
          margin-right: 1rem;
          font-family: 'Material Symbols Outlined';
          font-size: 1.5rem;
        }
      </style>
      <ul>
        <li><span class="icon">check_box_outline_blank</span>Create unique and valuable content</li>
        <li><span class="icon">check_box_outline_blank</span>Focus on the user experience</li>
        <li><span class="icon">check_box_outline_blank</span>Be honest and transparent</li>
        <li><span class="icon">check_box_outline_blank</span>Maintain a balanced ad-to-content ratio</li>
        <li><span class="icon">check_box_outline_blank</span>Avoid ads on non-content pages</li>
      </ul>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelectorAll('li').forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('checked');
        const icon = item.querySelector('.icon');
        icon.textContent = item.classList.contains('checked') ? 'check_box' : 'check_box_outline_blank';
      });
    });
  }
}

customElements.define('guideline-checklist', GuidelineChecklist);