import { Component, inject, input, OnInit } from '@angular/core'

import { NzCardModule } from 'ng-zorro-antd/card'
import { NzButtonComponent } from 'ng-zorro-antd/button'
import { DishComponent } from '../dish/dish.component'
import { EditService } from '../../services/edit.service'
import { LocalStorageService } from '../../services/local-storage.service'
import { ILocalStorageData } from '../../models/local-storage-data.model'
import { DaysOfWeek, MealEnum, MealLabels } from '../../models/enums'

@Component({
    selector: 'app-meal',
    imports: [NzCardModule, NzButtonComponent, DishComponent],
    templateUrl: './meal.component.html',
    standalone: true,
    styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {
    edit = inject(EditService)
    storage = inject(LocalStorageService)
    mealType = input<MealEnum>()
    dayOfWeek = input<DaysOfWeek>()

    dishes: string[] = []

    ngOnInit() {
        this.dishes = this.getInitialValues()
    }

    get title() {
        return MealLabels[this.mealType()!]
    }

    get dayKey(): string {
        const value = this.dayOfWeek()
        const entry = Object.entries(DaysOfWeek).find(([, v]) => v === value)
        return entry ? entry[0] : ''
    }

    updateDish(newText: string, index: number) {
        this.dishes[index] = newText
        this.dishes = this.dishes.filter((dish) => dish !== '')
        this.updateStorage()
    }

    createDish() {
        this.dishes.push('')
    }

    updateStorage() {
        let data = this.storage.getItem<ILocalStorageData>('data')
        if (!data) {
            data = { week: {} }
            this.storage.setItem<ILocalStorageData>('data', data)
        }
        const day = this.dayKey
        const meal = this.mealType()

        if (meal) {
            if (!data.week[day]) {
                data.week[day] = {
                    breakfast: [],
                    lunch: [],
                    dinner: []
                }
            }

            data.week[day][meal] = this.dishes
            this.storage.setItem<ILocalStorageData>('data', data)
        }
    }

    getInitialValues(): string[] {
        const data = this.storage.getItem<ILocalStorageData>('data')
        if (!data) {
            return []
        }

        const day = this.dayKey
        const meal = this.mealType()

        if (meal && data.week[day] && Array.isArray(data.week[day][meal])) {
            return data.week[day][meal]
        }

        return []
    }
}
