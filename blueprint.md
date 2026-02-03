# Product Builder Lecture Project

This project is a framework-less web application, designed to demonstrate modern web development practices within the Firebase Studio environment.

## Project Structure
- `index.html`, `content.html`, `ads.html`, `about.html`: The core HTML pages.
- `style.css`: Contains the styling for the application, including theme variables.
- `main.js`: Contains the core JavaScript logic and Web Components.
- `3d-hero.js`: Contains the Three.js logic for the homepage 3D animation.
- `GEMINI.md`: Guidelines and capabilities of the AI agent.
- `blueprint.md`: Documents the project's structure, design, features, and development steps.

## Implemented Plan: Theme Switcher and Accessibility

**Overview:** To make the site more accessible and visually dynamic, I have implemented a light/dark mode theme switcher and made several accessibility improvements.

**Implementation Details:**

1.  **CSS Theming:**
    *   Refactored `style.css` to use a robust set of CSS variables for theming.
    *   Defined color schemes for both `light` (default) and `dark` modes, controlled by a `data-theme` attribute on the `body`.

2.  **Theme Switcher Component:**
    *   Created a `<theme-toggle>` Web Component to provide a user-friendly way to switch themes.
    *   Added this component to the header of all HTML pages.
    *   The component's logic is defined in `main.js` and uses Shadow DOM for encapsulation.

3.  **Theme Persistence:**
    *   The theme switcher script saves the user's preference to `localStorage`.
    *   On initial load, it checks for a saved preference or the user's system preference (`prefers-color-scheme`) to set the initial theme.

4.  **Accessibility Enhancements:**
    *   **Focus Visibility:** Added a `:focus-visible` style to provide a clear outline for users navigating with a keyboard.
    *   **ARIA Labels:** Added an `aria-label` to the theme toggle button to provide context for screen reader users.
    *   **Themed Components:** Updated the `<guideline-checklist>` component to use the new CSS theme variables, ensuring it adapts correctly to both light and dark modes.

## Next Steps

The website is now more accessible and includes a persistent light/dark mode theme, providing a more polished and user-centric experience. I will now commit and push all the changes to the connected GitHub repository.
