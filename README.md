# LOST AND FOUND

## Overview

This project is a simple lost and found app

## Folder Structure

```
/LOST-AND-FOUND__FRONTEND
│── /assets
│   ├── /css
│   │   ├── styles.css
│   │   ├── reset.css
│   ├── /js
│   │   ├── main.js
│   │   ├── loadComponents.js
│   ├── /images
│   ├── /fonts
│── /components
│   ├── header.html
│   ├── footer.html
│── index.html
│── README.md
```

## Features

- **Reusable Components:** Header and footer are dynamically loaded using JavaScript.
- **Modular Structure:** Clean file organization for better maintainability.
- **Best Practices:** Uses modern HTML, CSS, and JS for efficient development.
- **Easy to Extend:** Simply add more components in the `/components` folder.

## How to Use

### 1. Clone the Repository

```sh
$ git clone https://github.com/DEVELOPERS-STUDENTS-CLUB/LOST-AND-FOUND__FRONTEND.git
$ cd LOST-AND-FOUND__FRONTEND
```

### 2. Open in a Browser

If working Using Vs Code Editor Use the Live Server Extension.
Otherwise simply open the index.html file in the browser.

### 3. Add Components

- Create a new component in the `/components` folder (e.g., `sidebar.html`).
- Use the `data-include` attribute to load it dynamically:

```html
<div data-include="components/sidebar.html"></div>
```

### 4. Modify Styles

- `/assets/css/global.css` should contain base styles.
- Create seprate files

### 5. JavaScript Component Loader

The `loadComponents.js` script dynamically loads components into pages.

### 6. Add Pages

- Create a new page in the `/pages` folder (e.g., `login.html`).

### 7. Assets

- Use the `/assets` folder to load the assets such as images, fonts, etc

## Best Practices

- **Follow Semantic HTML:** Use proper HTML tags (`<header>`, `<nav>`, `<section>`, `<footer>`).
- **Keep CSS Modular:** Use separate files for base styles, layout, and components.
- **Write Clean JavaScript:** Keep JavaScript organized and reusable.
- **Use Version Control:** Track changes using Git.
