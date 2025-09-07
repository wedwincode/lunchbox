import { Injectable, signal } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class EditService {
    isEdit = signal(false)

    toggleEdit() {
        this.isEdit.update((v) => !v)
    }
}
