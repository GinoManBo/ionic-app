export type TipoActividad = 'lugar' | 'tour' | 'transporte';

export interface Actividad {
  id: string;
  dia: number;
  hora: string;
  tipo: TipoActividad;
  titulo: string;
  lugarId?: string;
  version: number;
}
