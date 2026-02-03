import { init3DHero } from './3d-hero.js';

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
          background-color: #fff;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out;
          display: flex;
          align-items: center;
        }
        li:hover {
          background-color: #e9ecef;
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