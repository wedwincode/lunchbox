import { Component, inject, input, output } from '@angular/core'
import { NzIconDirective } from 'ng-zorro-antd/icon'
import { EditService } from '../../services/edit.service'

@Component({
    selector: 'app-dish',
    imports: [NzIconDirective],
    templateUrl: './dish.component.html',
    standalone: true,
    styleUrls: ['./dish.component.scss']
})
export class DishComponent {
    edit = inject(EditService)

    text = input<string>('')

    textChange = output<string>()
}
