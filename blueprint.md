# Product Builder Lecture Project

This project is a framework-less web application, designed to demonstrate modern web development practices within the Firebase Studio environment.

## Project Structure
- `index.html`: The main entry point of the application.
- `style.css`: Contains the styling for the application.
- `main.js`: Contains the core JavaScript logic, including Web Components.
- `GEMINI.md`: Guidelines and capabilities of the AI agent within this environment.
- `.idx/dev.nix`: Environment configuration for Firebase Studio.
- `.idx/mcp.json`: Firebase MCP server configuration.
- `.vscode/settings.json`: VS Code editor settings.
- `firebase-debug.log`: Firebase debug logs (ignored in `.gitignore`).
- `.gitignore`: Specifies intentionally untracked files to ignore.
- `blueprint.md`: Documents the project's structure, design, features, and development steps.

## Features
- **Modern HTML:** Utilizes Web Components for reusable UI elements.
- **Modern CSS:** Employs contemporary CSS features like Container Queries, Cascade Layers, and Logical Properties.
- **Modern JavaScript:** Written with ES Modules, Async/Await, and other modern syntax.
- **3D Graphics (Three.js):** Integrated for advanced visual effects.
- **WebAssembly (WASM):** For high-performance, computationally intensive tasks.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/dongdongju96/product-builder-lecture.git
    cd product-builder-lecture
    ```
2.  **Open in Firebase Studio:** If you are using Firebase Studio, the environment should automatically set up based on `.idx/dev.nix`.
3.  **Preview:** Use the built-in preview server in Firebase Studio to view the application.

## Development Guidelines

This project adheres to the AI Development Guidelines for Modern Web Projects in Firebase Studio, as detailed in `GEMINI.md`.

## Firebase MCP Configuration

The project includes Firebase MCP configuration in `.idx/mcp.json` for development and testing within the Firebase ecosystem.

## Blueprint

### Overview
This blueprint outlines the structure, design principles, and features of the "Product Builder Lecture Project." The project aims to provide a modern, framework-less web application demonstrating current web standards and practices within the Firebase Studio environment.

### Design and Features Implemented

*   **HTML Structure (`index.html`):**
    *   Basic HTML5 boilerplate.
    *   Links to `style.css` for styling.
    *   Links to `main.js` for JavaScript logic.
    *   Placeholder for Web Components (e.g., `<simple-greeting>`).

*   **CSS Styling (`style.css`):**
    *   Utilizes modern CSS features.
    *   Responsive design considerations.
    *   Focus on clean, maintainable styles.

*   **JavaScript Logic (`main.js`):**
    *   Implements Web Components (e.g., `SimpleGreeting` custom element).
    *   Uses ES Modules for modularity.
    *   Incorporates `async/await` and `fetch` for asynchronous operations.

*   **3D Graphics:**
    *   Integration of Three.js library for 3D rendering capabilities. (Currently not implemented in detail, but framework is in place.)

*   **WebAssembly:**
    *   Capability for WASM integration for performance-critical tasks. (Currently not implemented, but planned.)

*   **Firebase Integration:**
    *   Awareness of standard Firebase SDK integration patterns.

### Current Plan

**Objective:** To ensure all necessary project documentation is committed and pushed to the remote repository after initial setup.

**Steps:**
1.  **Check for untracked `blueprint.md`.** (Completed)
    *   Identified `blueprint.md` as an untracked file.
2.  **Stage `blueprint.md`.** (Completed)
    *   Added `blueprint.md` to the staging area.
3.  **Commit `blueprint.md`.** (Completed)
    *   Committed with message "Add blueprint.md".
4.  **Push `blueprint.md` commit to remote.** (Completed)
    *   Pushed the commit to `origin/main`.

## Next Steps

The project is now fully connected to the remote GitHub repository, and all initial setup, including essential documentation and Git ignore configurations, is complete. The working tree is clean. Further development can proceed based on user requirements.
