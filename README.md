Tourip - App Turista primera entrega.

Corremos con:
    npm install
    ionic serve
tabs:
- Tabs: paginas/      inicio, mapa, explorar, plan, perfil, acceso, detalle-lugar
- componentes: componentes/  tarjeta-lugar, item-plan
- servicios: servicios/    lugares, viaje, auth, ubicacion, notificaciones
- modelos: modelos/      lugar, plan, usuario, resena

Estado:
- Datos en memoria (mock), todavia sin Firebase.
- Mantenedor: Plan (crear, listar, editar con version, borrar).
- Pendiente: Firebase, mapa (Leaflet), GPS, guardados, resenas, filtros, guards, estilos.
