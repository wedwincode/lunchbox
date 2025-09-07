import { Component } from '@angular/core'
import { LayoutComponent } from '../../components/layout/layout.component'

@Component({
    selector: 'app-welcome',
    imports: [LayoutComponent],
    templateUrl: './welcome.html',
    standalone: true,
    styleUrl: './welcome.scss'
})
export class Welcome {}
