import { Injectable } from '@angular/core';
import { Observable, of, delay, map } from 'rxjs';
import { Lugar } from '../modelos/lugar';

// TODO: reemplazar por Firestore (coleccion "lugares", solo estado == aprobado)
const LUGARES_MOCK: Lugar[] = [
  {
    id: 'l1',
    nombre: 'Parque Ecuador',
    categoria: 'naturaleza',
    descripcion: 'Parque en el centro, con vista al rio Biobio.',
    precio: 0,
    horario: '08:00 - 20:00',
    duracionMin: 60,
    lat: -36.8269,
    lng: -73.0498,
    fotos: [],
    estado: 'aprobado',
  },
  {
    id: 'l2',
    nombre: 'Mirador Aleman',
    categoria: 'naturaleza',
    descripcion: 'Mirador en el cerro Caracol.',
    precio: 0,
    horario: '09:00 - 19:00',
    duracionMin: 45,
    lat: -36.8302,
    lng: -73.0431,
    fotos: [],
    estado: 'aprobado',
  },
  {
    id: 'l3',
    nombre: 'Cafe del centro (ejemplo)',
    categoria: 'gastronomia',
    descripcion: 'Dato de prueba.',
    precio: 4500,
    horario: '10:00 - 21:00',
    duracionMin: 40,
    lat: -36.8261,
    lng: -73.0503,
    fotos: [],
    estado: 'aprobado',
  },
];

@Injectable({ providedIn: 'root' })
export class LugaresService {
  listar(): Observable<Lugar[]> {
    return of(LUGARES_MOCK).pipe(delay(400));
  }

  obtener(id: string): Observable<Lugar> {
    return this.listar().pipe(
      map((ls) => {
        const l = ls.find((x) => x.id === id);
        if (!l) throw new Error('Lugar no encontrado');
        return l;
      })
    );
  }

  // TODO: filtrar por tiempo, presupuesto e intereses (pantalla Inicio)
  recomendar(minutos: number, presupuesto: number): Observable<Lugar[]> {
    return this.listar().pipe(
      map((ls) => ls.filter((l) => l.duracionMin <= minutos && l.precio <= presupuesto))
    );
  }
}
