import { Component, inject, input } from '@angular/core'

import { NzCardModule } from 'ng-zorro-antd/card'
import { NzIconDirective } from 'ng-zorro-antd/icon'
import { NzButtonComponent } from 'ng-zorro-antd/button'
import { DishComponent } from '../dish/dish.component'
import { EditService } from '../../services/edit.service'

@Component({
    selector: 'app-meal',
    imports: [NzCardModule, NzIconDirective, NzButtonComponent, DishComponent],
    templateUrl: './meal.component.html',
    standalone: true,
    styleUrls: ['./meal.component.scss']
})
export class MealComponent {
    edit = inject(EditService)
    type = input<'breakfast' | 'lunch' | 'dinner'>()

    get title() {
        switch (this.type()) {
            case 'breakfast':
                return 'Завтрак'
            case 'lunch':
                return 'Обед'
            case 'dinner':
                return 'Ужин'
            default:
                return 'Приём пищи'
        }
    }

    updateDish(newText: string) {
        console.log(newText)
    }
}
