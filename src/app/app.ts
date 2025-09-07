import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NgOptimizedImage } from '@angular/common'

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NzLayoutModule, NzMenuModule, RouterLinkActive, RouterLink, NgOptimizedImage],
    templateUrl: './app.html',
    standalone: true,
    styleUrl: './app.scss'
})
export class App {}
