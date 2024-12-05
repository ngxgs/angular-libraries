import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { StyleManager } from './style-manager.service';

describe('StyleManager', () => {
    let styleManager: StyleManager;

    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [StyleManager],
        })
    );

    beforeEach(inject([StyleManager], (sm: StyleManager) => {
        styleManager = sm;
    }));

    it('should add stylesheet to head', () => {
        styleManager.setStyle('test', 'test.css');
        const styleEl = document.head.querySelector('.test') as HTMLLinkElement;
        expect(styleEl).not.toBeNull();
        expect(styleEl.href.endsWith('test.css')).toBe(true);
    });

    it('should change existing stylesheet', () => {
        styleManager.setStyle('test', 'test.css');
        const styleEl = document.head.querySelector('.test') as HTMLLinkElement;
        expect(styleEl).not.toBeNull();
        expect(styleEl.href.endsWith('test.css')).toBe(true);

        styleManager.setStyle('test', 'new.css');
        expect(styleEl.href.endsWith('new.css')).toBe(true);
    });

    it('should remove existing stylesheet', () => {
        styleManager.setStyle('test', 'test.css');
        let styleEl = document.head.querySelector('.test') as HTMLLinkElement;
        expect(styleEl).not.toBeNull();
        expect(styleEl.href.endsWith('test.css')).toBe(true);

        styleManager.removeStyle('test');
        styleEl = document.head.querySelector('.test') as HTMLLinkElement;
        expect(styleEl).toBeNull();
    });
});
