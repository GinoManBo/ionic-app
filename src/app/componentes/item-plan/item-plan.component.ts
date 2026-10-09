import { Component, input, output } from '@angular/core';
import { IonItem, IonLabel, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/angular';
import { Actividad } from '../../modelos/plan';

@Component({
  selector: 'app-item-plan',
  templateUrl: 'item-plan.component.html',
  imports: [IonItem, IonLabel, IonItemSliding, IonItemOptions, IonItemOption],
})
export class ItemPlanComponent {
  actividad = input.required<Actividad>();
  editar = output<Actividad>();
  eliminar = output<Actividad>();
}
