import { Component } from '@angular/core'

import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzGridModule } from 'ng-zorro-antd/grid'

@Component({
    selector: 'app-layout',
    imports: [NzDividerModule, NzGridModule],
    templateUrl: './layout.component.html',
    standalone: true,
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {}
