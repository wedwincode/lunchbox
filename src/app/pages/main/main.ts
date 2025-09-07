import { Component } from '@angular/core'
import { LayoutComponent } from '../../components/layout/layout.component'

@Component({
    selector: 'app-main',
    imports: [LayoutComponent],
    templateUrl: './main.html',
    standalone: true,
    styleUrl: './main.scss'
})
export class Main {}
