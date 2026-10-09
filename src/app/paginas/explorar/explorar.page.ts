import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonList, IonSpinner,
} from '@ionic/angular';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { LugaresService } from '../../servicios/lugares.service';
import { Lugar } from '../../modelos/lugar';
import { TarjetaLugarComponent } from '../../componentes/tarjeta-lugar/tarjeta-lugar.component';

@Component({
  selector: 'app-explorar',
  templateUrl: 'explorar.page.html',
  imports: [
    AsyncPipe, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonList, IonSpinner,
    TarjetaLugarComponent,
  ],
})
export class ExplorarPage implements OnInit {
  private lugares = inject(LugaresService);
  private texto$ = new BehaviorSubject<string>('');
  lista$!: Observable<Lugar[]>;

  ngOnInit() {
    this.lista$ = combineLatest([this.lugares.listar(), this.texto$]).pipe(
      map(([ls, t]) => ls.filter((l) => l.nombre.toLowerCase().includes(t.toLowerCase())))
    );
  }

  buscar(ev: Event) {
    this.texto$.next((ev as CustomEvent).detail.value ?? '');
  }

  guardar(l: Lugar) {
    console.log('guardar', l.id);
  }
}
