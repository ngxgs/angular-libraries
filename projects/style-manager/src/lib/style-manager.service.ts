import { inject, Injectable, RendererFactory2 } from '@angular/core';

/**
 * Injectable class for managing stylesheets. Stylesheets are loaded into
 * the head element and they can be removed or changed later.
 */
@Injectable({
    providedIn: 'root',
})
export class StyleManager {
    protected readonly rendererF2 = inject(RendererFactory2);
    protected readonly renderer = this.rendererF2.createRenderer(null, null);
    /**
     * Set the stylesheet with the specified key for managing later.
     *
     * @param key Is a class for the created link element.
     * @param href The url to the stylesheet.
     */
    setStyle(key: string, href: string) {
        this.getLinkElementForKey(key).setAttribute('href', href);
    }

    /**
     * Remove the stylesheet with the specified key.
     *
     * @param key Is a class of the existing link element to be removed.
     * @returns True if successfully remove style or false if not.
     */
    removeStyle(key: string): boolean {
        const existingLinkElement = this.getExistingLinkElementByKey(key);
        if (existingLinkElement) {
            this.renderer.removeChild(document.head, existingLinkElement);
            return true;
        }
        return false;
    }

    protected getLinkElementForKey(key: string) {
        return (
            this.getExistingLinkElementByKey(key) ||
            this.createLinkElementWithKey(key)
        );
    }

    protected getExistingLinkElementByKey(key: string) {
        return document.head.querySelector(`link[rel="stylesheet"].${key}`);
    }

    protected createLinkElementWithKey(key: string) {
        const linkEl = this.renderer.createElement('link');
        this.renderer.setAttribute(linkEl, 'rel', 'stylesheet');
        this.renderer.addClass(linkEl, `${key}`);
        this.renderer.appendChild(document.head, linkEl);
        return linkEl;
    }
}
