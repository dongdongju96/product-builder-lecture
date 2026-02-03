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

**Objective:** To ensure proper Git ignore configuration for the project after initial connection to the remote repository.

**Steps:**
1.  **Check for existing `.gitignore`.** (Completed)
    *   Determined that no `.gitignore` file existed.
2.  **Create `.gitignore` and add `firebase-debug.log`.** (Completed)
    *   Created `/.gitignore` with `firebase-debug.log` as its content.
3.  **Stage `.gitignore`.** (Completed)
    *   Added `.gitignore` to the staging area.
4.  **Commit `.gitignore`.** (Completed)
    *   Committed with message "Add .gitignore and exclude firebase-debug.log".
5.  **Push `.gitignore` commit to remote.** (Completed)
    *   Pushed the commit to `origin/main`.

## Next Steps

The project is now connected to the remote GitHub repository, and essential development configurations like `.gitignore` are in place. Further development can proceed based on user requirements.