export type EstadoLugar = 'pendiente' | 'aprobado' | 'rechazado';

export interface Lugar {
  id: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  horario: string;
  duracionMin: number;
  lat: number;
  lng: number;
  fotos: string[];
  estado: EstadoLugar;
}
