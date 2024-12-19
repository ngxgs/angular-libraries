# Connection Status 

This library provides a very simple way to listen the events of `online` and `offline`. This library is platform-agnostic, that means it's works in Server-Side Rendering (SSR) applications and Web-Wokers. 

## Getting Started

### Install

Run the command: `npm install @ngxgs/connection-status`, inside your application.

### Usage Exemple

```typescript
import { Component, inject } from '@angular/core';
import { ConnectionStatus } from '@ngxgs/connection-status';

@Component({
    ...
})
export class MyComponent {
    connService = inject(ConnectionStatus);
    constructor() {
        this.connService.onStatusChange$.subscribe((event) => {
            // verify if the user go online
            if (event.type === 'online') {
                // do something...
            }

            // verify if the user go offline
            if (event.type === 'offline') {
                // do something else...
            }
        });
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
