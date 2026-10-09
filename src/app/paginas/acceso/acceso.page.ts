import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton } from '@ionic/angular';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-acceso',
  templateUrl: 'acceso.page.html',
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton],
})
export class AccesoPage {
  private auth = inject(AuthService);
  private router = inject(Router);

  correo = '';
  clave = '';

  async entrar() {
    await this.auth.iniciarSesion(this.correo, this.clave);
    this.router.navigateByUrl('/tabs/inicio');
  }
}
