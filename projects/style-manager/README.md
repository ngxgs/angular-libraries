# Style Manager 

Use this injectable class for easily add and remove stylesheets on your Angular application, managing these elements by they key.

**Warning.** This is a re-work of [material.angular.io](https://github.com/angular/material.angular.io) style-manager service, powered by the Renderer2 Angular API for Server-Side Rendering applications. 

## Getting Started

### Install

Run the command: `npm install @ngxgs/style-manager`, inside your application.

### Usage Exemple

```typescript
import { Component, inject } from '@angular/core';
import { StyleManager } from 'ngx-style-manager';

@Component({
    ...
})
export class MyComponent {
    styleManager = inject(StyleManager);

    constructor() {
        this.styleManager.setStyle('theme-class', 'path/to/style.css');
    }
}
```

## Contact

### Repository

You can contribute to this library through its GitHub repository: [sougabriel/ngx-libraries](https://github.com/sougabriel/ngx-libraries).

### Author

<div>
    <a href="https://github.com/sougabriel">
        <img src="https://skillicons.dev/icons?i=github" height="32px" alt="GitHub Logo" /> github.com/sougabriel
    </a><br>
    <a href="mailto:gabriel.dsouzapro@gmail.com">
        <img src="https://skillicons.dev/icons?i=gmail" height="32px" alt="Gmail Logo" /> gabriel.dsouzapro@gmail.com
    </a><br>
    <a href="https://www.linkedin.com/in/sougabriels/">
        <img src="https://skillicons.dev/icons?i=linkedin" height="32px" alt="LinkedIn Logo" /> linkedin.com/in/sougabriels
    <a><br>
</div>
