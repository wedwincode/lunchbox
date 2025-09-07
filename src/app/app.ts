import { Component, inject, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NgOptimizedImage } from '@angular/common'
import { NzButtonComponent } from 'ng-zorro-antd/button'
import { EditService } from './services/edit.service'
import { LocalStorageService } from './services/local-storage.service'
import { NzTypographyComponent } from 'ng-zorro-antd/typography'

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NzLayoutModule, NzMenuModule, NgOptimizedImage, NzButtonComponent, NzTypographyComponent],
    templateUrl: './app.html',
    standalone: true,
    styleUrl: './app.scss'
})
export class App implements OnInit {
    edit = inject(EditService)
    storage = inject(LocalStorageService)

    isBegin = true

    toggleEdit() {
        this.edit.toggleEdit()
        this.isBegin = !this.storage.getItem('data')
    }

    toggleClear() {
        this.storage.clear()
        this.isBegin = true
        window.location.reload()
    }

    ngOnInit() {
        this.isBegin = !this.storage.getItem('data')
    }
}
