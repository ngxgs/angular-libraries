# Style Manager 

Use this injectable class for easily add and remove stylesheets on your Angular application, managing these elements by they key.

**Warning.** This is a re-work of [material.angular.io](https://github.com/angular/material.angular.io) style-manager service, powered by the Renderer2 Angular API for Server-Side Rendering applications. 

## Getting Started

### Install

Run the command: `npm install ngx-style-manager`, inside your Angular application.

### Usage Exemple

```typescript
import { Component, inject } from '@angular/core';
import { StyleManager } from 'ngx-style-manager';

@Component({
    ...
})
export class MyComponent {
    styleManager = inject(StyleManager);
}
```

## Contact

### Repository

You can contribute to this library and others through its GitHub repository: [sougabriel/ngx-libraries](https://github.com/sougabriel/ngx-libraries).

### Author

<div align="center">
    <a href="https://github.com/sougabriel">
        <img src="https://skillicons.dev/icons?i=github" height="32px" alt="GitHub Logo" />
    </a>
    <a href="mailto:gabriel.dsouzapro@gmail.com">
        <img src="https://skillicons.dev/icons?i=gmail" height="32px" alt="Gmail Logo" />
    </a>
    <a href="https://www.linkedin.com/in/sougabriels/">
        <img src="https://skillicons.dev/icons?i=linkedin" height="32px" alt="LinkedIn Logo" />
    <a>
</div>
