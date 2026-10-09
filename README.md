# Tourip - App Turista (Ionic) v0.0.1

Esqueleto de la entrega 1. Ionic 9 + Angular (standalone) + Capacitor.

## Correr
    npm install
    ionic serve

## Estructura (src/app)
- `paginas/`      inicio, mapa, explorar, plan, perfil, acceso, detalle-lugar
- `componentes/`  tarjeta-lugar, item-plan
- `servicios/`    lugares, viaje, auth, ubicacion, notificaciones
- `modelos/`      lugar, plan, usuario, resena

## Estado
- Datos en memoria (mock), todavia sin Firebase.
- Mantenedor: Plan (crear, listar, editar con version, borrar).
- Pendiente: Firebase, mapa (Leaflet), GPS, guardados, resenas, filtros, guards, estilos.
