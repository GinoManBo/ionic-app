export type Rol = 'turista' | 'capacitador' | 'guia' | 'admin';

export interface Usuario {
  uid: string;
  nombre: string;
  correo: string;
  rol: Rol;
  intereses: string[];
}
