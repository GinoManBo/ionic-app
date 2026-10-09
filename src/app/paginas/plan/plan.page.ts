import { Component, inject, OnInit } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonSpinner, IonButton,
  IonFab, IonFabButton, IonIcon, AlertController, ToastController,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { ViajeService } from '../../servicios/viaje.service';
import { Actividad } from '../../modelos/plan';
import { ItemPlanComponent } from '../../componentes/item-plan/item-plan.component';

@Component({
  selector: 'app-plan',
  templateUrl: 'plan.page.html',
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonSpinner, IonButton,
    IonFab, IonFabButton, IonIcon, ItemPlanComponent,
  ],
})
export class PlanPage implements OnInit {
  private viaje = inject(ViajeService);
  private alertCtrl = inject(AlertController);
  private toastCtrl = inject(ToastController);

  actividades: Actividad[] = [];
  cargando = true;
  error = '';

  constructor() {
    addIcons({ add });
  }

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    this.cargando = true;
    this.error = '';
    this.viaje.listar().subscribe({
      next: (a) => {
        this.actividades = a;
        this.cargando = false;
      },
      error: () => {
        this.error = 'No se pudo cargar el plan';
        this.cargando = false;
      },
    });
  }

  async nueva() {
    const alert = await this.alertCtrl.create({
      header: 'Nueva actividad',
      inputs: [
        { name: 'titulo', placeholder: 'Titulo' },
        { name: 'hora', type: 'time', value: '10:00' },
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Guardar',
          handler: (d) => {
            if (!d.titulo) return false;
            this.viaje.agregar({ dia: 1, hora: d.hora, tipo: 'lugar', titulo: d.titulo }).subscribe({
              next: () => { this.cargar(); this.aviso('Actividad agregada'); },
              error: () => this.aviso('No se pudo agregar'),
            });
            return true;
          },
        },
      ],
    });
    await alert.present();
  }

  async editar(a: Actividad) {
    const alert = await this.alertCtrl.create({
      header: 'Editar actividad',
      inputs: [
        { name: 'titulo', value: a.titulo },
        { name: 'hora', type: 'time', value: a.hora },
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Guardar',
          handler: (d) => {
            this.viaje.editar({ ...a, titulo: d.titulo, hora: d.hora }).subscribe({
              next: () => { this.cargar(); this.aviso('Actividad editada'); },
              error: (e) => this.aviso(e.message),
            });
          },
        },
      ],
    });
    await alert.present();
  }

  borrar(a: Actividad) {
    this.viaje.eliminar(a.id).subscribe({
      next: () => { this.cargar(); this.aviso('Actividad eliminada'); },
      error: () => this.aviso('No se pudo eliminar'),
    });
  }

  private async aviso(mensaje: string) {
    const t = await this.toastCtrl.create({ message: mensaje, duration: 1800 });
    await t.present();
  }
}
