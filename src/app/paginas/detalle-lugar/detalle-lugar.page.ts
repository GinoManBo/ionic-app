import { Component, inject, input, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonSpinner,
} from '@ionic/angular';
import { Observable } from 'rxjs';
import { LugaresService } from '../../servicios/lugares.service';
import { Lugar } from '../../modelos/lugar';

@Component({
  selector: 'app-detalle-lugar',
  templateUrl: 'detalle-lugar.page.html',
  imports: [AsyncPipe, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonSpinner],
})
export class DetalleLugarPage implements OnInit {
  private lugares = inject(LugaresService);

  id = input.required<string>();
  lugar$!: Observable<Lugar>;

  ngOnInit() {
    this.lugar$ = this.lugares.obtener(this.id());
  }
}
