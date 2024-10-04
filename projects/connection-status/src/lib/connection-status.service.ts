import { inject, Injectable, OnDestroy, RendererFactory2, signal } from "@angular/core";
import { fromEvent, merge, shareReplay } from "rxjs";

/**
 * Inject this class for listen when user become online and offline. 
 */
@Injectable({
    providedIn: 'root'
})
export class ConnectionStatus implements OnDestroy {
    protected readonly rendererFactory = inject(RendererFactory2);
    protected readonly renderer = this.rendererFactory.createRenderer(null, null);
    protected unListener!: () => void;

    /**
     * An Observable of the events online and offline.
     */
    observeEvents$ = merge(
        fromEvent<Event>(window, "online").pipe(shareReplay()),
        fromEvent<Event>(window, "offline").pipe(shareReplay())
    );
    
    /**
     * A boolean signal, useful in ternary conditionals.
     */
    isOnline = signal<boolean>(true);

    constructor() {
        this.createEvent();
    }
    
    protected createEvent() {
        this.unListener = this.renderer.listen("window", "online", () => {
            this.isOnline.set(true);
        });
        this.unListener = this.renderer.listen("window", "offline", () => {
            this.isOnline.set(false);
        });
    }

    ngOnDestroy(): void {
        this.unListener();
    }
}