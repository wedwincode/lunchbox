import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing'
import { MealComponent } from './meal.component'

describe('MealComponent', () => {
    let component: MealComponent
    let fixture: ComponentFixture<MealComponent>

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
            declarations: [MealComponent]
        }).compileComponents()
        fixture = TestBed.createComponent(MealComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    }))

    it('should compile', () => {
        expect(component).toBeTruthy()
    })
})
