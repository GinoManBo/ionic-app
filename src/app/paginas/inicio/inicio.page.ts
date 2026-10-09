import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, IonList, IonSpinner,
} from '@ionic/angular';
import { Observable } from 'rxjs';
import { LugaresService } from '../../servicios/lugares.service';
import { Lugar } from '../../modelos/lugar';
import { TarjetaLugarComponent } from '../../componentes/tarjeta-lugar/tarjeta-lugar.component';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  imports: [
    FormsModule, AsyncPipe, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput,
    IonButton, IonList, IonSpinner, TarjetaLugarComponent,
  ],
})
export class InicioPage {
  private lugares = inject(LugaresService);

  minutos = 120;
  presupuesto = 10000;
  resultados$: Observable<Lugar[]> = this.lugares.listar();

  buscar() {
    // usar lugares.recomendar(minutos, presupuesto) cuando funcionen los filtros
  }

  guardar(l: Lugar) {
    // guardar en favoritos (usuarios/{uid}/guardados)
    console.log('guardar', l.id);
  }
}
