import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    setItem<T>(key: string, value: T): void {
        try {
            const jsonValue = JSON.stringify(value)
            localStorage.setItem(key, jsonValue)
        } catch (error) {
            console.error('Error saving to local storage', error)
        }
    }

    getItem<T>(key: string): T | null {
        try {
            const value = localStorage.getItem(key)
            return value ? JSON.parse(value) : null
        } catch (error) {
            console.error('Error reading from local storage', error)
            return null
        }
    }

    removeItem(key: string): void {
        localStorage.removeItem(key)
    }

    clear(): void {
        localStorage.clear()
    }
}
