import { Component, inject } from '@angular/core'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NgOptimizedImage } from '@angular/common'
import { NzButtonComponent } from 'ng-zorro-antd/button'
import { EditService } from './services/edit.service'

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        NzLayoutModule,
        NzMenuModule,
        RouterLinkActive,
        RouterLink,
        NgOptimizedImage,
        NzButtonComponent
    ],
    templateUrl: './app.html',
    standalone: true,
    styleUrl: './app.scss'
})
export class App {
    edit = inject(EditService)

    toggleEdit() {
        this.edit.toggleEdit()
    }
}
