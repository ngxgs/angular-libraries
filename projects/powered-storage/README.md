# Powered Storage

A service for improve the local and session storage of the applications.

## Getting Started

### Install

Run the command: `npm install @ngxgs/powered-storage`, inside your application.

### Usage Exemple

```typescript
import { Component, inject } from '@angular/core';
import { PoweredStorage } from '@ngxgs/powered-storage';

@Component({
    ...
})
export class MyComponent {
    poweredStorage = inject(PoweredStorage);
    constructor() {
        this.poweredStorage.setItem('key', 'value');
        const item = this.poweredStorage.getItem<type>('key');
        if (item) {
            // do something...
        }
    }
}
```

## Contact

### Repository

You can contribute to this library through its GitHub repository: [ngxgs/libraries](https://github.com/ngxgs/libraries.git).

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
