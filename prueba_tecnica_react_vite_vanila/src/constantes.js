
export const API_GATOS_FACTS = "http://192.168.1.215:8000/api/incidencias";

export function API_GATO_IMAGEN(palabras) {
    return `https://cataas.com/cat/says/${palabras}?fontSize=50&fontColor=red`;
}

export function stringIncidencias(uuid, descripcion, fecha, estado) {
    return "uuid: " + uuid + ", Descripcion: " + descripcion + ", Fecha: " + fecha + ", Estado: " + estado;
}

export function bucleIncidencias(incidencias) {
    for (let i = 0; i < incidencias.length; i++) {
        const uuid = incidencias[i].uuid;
        const descripcion = incidencias[i].descripcion;
        const fecha = incidencias[i].fecha;
        const estado = incidencias[i].estado;
        const stringIncidencia = stringIncidencias(uuid, descripcion, fecha, estado);
        return stringIncidencia + "\n";
    }
}