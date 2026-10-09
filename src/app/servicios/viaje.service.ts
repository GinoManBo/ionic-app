import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, of, tap, throwError } from 'rxjs';
import { Actividad } from '../modelos/plan';

// TODO: guardar en Firestore (coleccion "planes"). Por ahora es memoria.
@Injectable({ providedIn: 'root' })
export class ViajeService {
  private actividades: Actividad[] = [
    { id: 'a1', dia: 1, hora: '10:00', tipo: 'lugar', titulo: 'Parque Ecuador', lugarId: 'l1', version: 1 },
  ];
  private subject = new BehaviorSubject<Actividad[]>(this.actividades);
  actividades$ = this.subject.asObservable();

  listar(): Observable<Actividad[]> {
    return of([...this.actividades]).pipe(delay(300));
  }

  agregar(a: Omit<Actividad, 'id' | 'version'>): Observable<Actividad> {
    const nueva: Actividad = { ...a, id: 'a' + Date.now(), version: 1 };
    this.actividades = [...this.actividades, nueva];
    return of(nueva).pipe(delay(200), tap(() => this.subject.next(this.actividades)));
  }

  editar(a: Actividad): Observable<Actividad> {
    const actual = this.actividades.find((x) => x.id === a.id);
    if (!actual) return throwError(() => new Error('La actividad ya no existe'));
    if (actual.version !== a.version) {
      return throwError(() => new Error('La actividad cambio, recarga e intenta de nuevo'));
    }
    const nueva = { ...a, version: a.version + 1 };
    this.actividades = this.actividades.map((x) => (x.id === a.id ? nueva : x));
    return of(nueva).pipe(delay(200), tap(() => this.subject.next(this.actividades)));
  }

  eliminar(id: string): Observable<void> {
    this.actividades = this.actividades.filter((x) => x.id !== id);
    return of(void 0).pipe(delay(200), tap(() => this.subject.next(this.actividades)));
  }
}
