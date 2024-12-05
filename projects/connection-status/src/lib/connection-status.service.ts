import {
    inject,
    Injectable,
    OnDestroy,
    RendererFactory2,
    signal,
} from '@angular/core';
import { fromEvent, merge, Observable, shareReplay } from 'rxjs';

/**
 * Inject this class for listen when user become online and offline.
 */
@Injectable({
    providedIn: 'root',
})
export class ConnectionStatus implements OnDestroy {
    protected readonly rendererF2 = inject(RendererFactory2);
    protected readonly renderer = this.rendererF2.createRenderer(null, null);
    protected unListener!: () => void;

    /**
     * An Observable of the events online and offline.
     * Before use this Observable, verify if 'window' global element i'snt 'undefined'.
     */
    onStatusChange$: Observable<Event> = merge(
        fromEvent<Event>(window, 'online').pipe(shareReplay()),
        fromEvent<Event>(window, 'offline').pipe(shareReplay())
    );

    /**
     * A Signal of boolean, true if user has connection or false if not. Useful in ternary conditionals.
     */
    status = signal<boolean>(true);

    constructor() {
        try {
            this.createEvent();
        } catch {}
    }

    protected createEvent() {
        this.unListener = this.renderer.listen('window', 'online', () => {
            this.status.set(true);
        });
        this.unListener = this.renderer.listen('window', 'offline', () => {
            this.status.set(false);
        });
    }

    ngOnDestroy(): void {
        this.unListener();
    }
}
