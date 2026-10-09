import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UbicacionService {
  async posicionActual(): Promise<{ lat: number; lng: number }> {
    return { lat: -36.8201, lng: -73.0444 };
  }
}
