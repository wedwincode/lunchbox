import { Component } from '@angular/core'

import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { MealComponent } from '../meal/meal.component'
import { NzTypographyComponent } from 'ng-zorro-antd/typography'
import { DaysOfWeek, MealEnum } from '../../models/enums'

@Component({
    selector: 'app-layout',
    imports: [NzDividerModule, NzGridModule, MealComponent, NzTypographyComponent],
    templateUrl: './layout.component.html',
    standalone: true,
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
    protected readonly MealEnum = MealEnum
    protected readonly DaysOfWeek = Object.values(DaysOfWeek) as DaysOfWeek[]
}
