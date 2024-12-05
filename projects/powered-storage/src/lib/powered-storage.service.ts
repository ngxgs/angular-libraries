import { Injectable } from '@angular/core';

/**
 * Provides a service for easily managing Local and Session Storage.
 */
@Injectable({
    providedIn: 'root',
})
export class PoweredStorage {
    /**
     * Method to store items on the storage.
     *
     * @param key The identifier of the item to be storage.
     * @param value Anything you want to be storage.
     * @param expiration Optional expiration date to remove the item. The date must be after the current date.
     * @param storage The storage used to set items, localStorage is default.
     * @returns True if the item was created or false if not.
     */
    setItem(
        key: string,
        value: unknown,
        expiration?: Date,
        storage: Storage = localStorage
    ): boolean {
        if (key) {
            try {
                const now = Date.now();
                const today = new Date(now);
                if (expiration && expiration > today) {
                    const item = { value, expiration };
                    storage.setItem(key.trim(), JSON.stringify(item));
                } else {
                    storage.setItem(key.trim(), JSON.stringify(value));
                }
                return true;
            } catch {
                return false;
            }
        }
        return false;
    }

    /**
     * Method to get item on the storage by the key. If the item has expiration and is the date defined, the item is be returned and removed.
     *
     * @param key The identifier of the value to be returned.
     * @param storage The storage used to set items, localStorage is default.
     * @returns The item on the storage or null if not exists. It will return null if the key provided is not valid.
     */
    getItem<T>(key: string, storage: Storage = localStorage): T | null {
        if (key) {
            try {
                const itemString = storage.getItem(key.trim());
                if (itemString) {
                    const today = new Date(Date.now());
                    const item = JSON.parse(itemString);
                    if ((item.expiration as Date) == today) {
                        this.removeItem(key);
                    }
                    return item;
                }
            } catch {
                return null;
            }
        }
        return null;
    }

    /**
     * Method to remove a single item on the storage by the key.
     *
     * @param key The identifier of the value to be returned.
     * @param storage The storage used to set items, localStorage is default.
     * @returns True if the item was removed or false if not.
     */
    removeItem(key: string, storage: Storage = localStorage): boolean {
        if (key) {
            storage.removeItem(key.trim());
            return true;
        }
        return false;
    }

    /**
     * Method to remove all items on the storage.
     *
     * @param storage The storage used to set items, localStorage is default.
     * @returns True if successfully remove all items or false if not.
     */
    removeAllItems(storage: Storage = localStorage) {
        try {
            storage.clear();
            return true;
        } catch {
            return false;
        }
    }

    /**
     * Method to get all items on the storage.
     *
     * @param storage The storage used to set items, localStorage is default.
     * @returns All items on the storage.
     */
    getAllItens(storage: Storage = localStorage) {
        let values: ItemStorage[] = [];
        let keys = Object.keys(localStorage);

        keys.forEach((key) => {
            const ItemStorage = storage.getItem(key);
            if (ItemStorage) {
                const item: ItemStorage = { key: key, value: ItemStorage };
                values.push(item);
            }
        });

        return values;
    }
}

/**
 * Item class shape.
 */
export interface ItemStorage {
    key: string;
    value: unknown;
    expiration?: Date;
}
