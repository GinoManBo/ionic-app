import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario';

// TODO: Firebase Authentication (correo y Google)
@Injectable({ providedIn: 'root' })
export class AuthService {
  usuario: Usuario | null = null;

  async iniciarSesion(correo: string, _clave: string): Promise<void> {
    this.usuario = { uid: 'u1', nombre: 'Turista', correo, rol: 'turista', intereses: [] };
  }

  async cerrarSesion(): Promise<void> {
    this.usuario = null;
  }
}
