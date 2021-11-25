console.log('Documento de prueba');

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 456542,
        lat: 14.53616,
        lng: 15.1254,
    }
};

// Persona y Persona2 tienen la misma referencia en memoria
// const persona2 = persona;
// persona2.nombre = 'Peter';

// Hacer una copia del objeto Persona en diferente espacio en memoria
const persona2 = {...persona};
persona2.nombre = 'Peter';

// console.table(persona);
console.log(persona);
console.log(persona2);