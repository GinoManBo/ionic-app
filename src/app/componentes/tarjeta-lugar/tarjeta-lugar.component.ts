import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonItem, IonLabel, IonNote, IonButton } from '@ionic/angular';
import { Lugar } from '../../modelos/lugar';

@Component({
  selector: 'app-tarjeta-lugar',
  templateUrl: 'tarjeta-lugar.component.html',
  imports: [IonItem, IonLabel, IonNote, IonButton, RouterLink],
})
export class TarjetaLugarComponent {
  lugar = input.required<Lugar>();
  guardar = output<Lugar>();
}
