import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.page.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class PerfilPage {
  auth = inject(AuthService);
  private router = inject(Router);

  async salir() {
    await this.auth.cerrarSesion();
    this.router.navigateByUrl('/acceso');
  }
}
