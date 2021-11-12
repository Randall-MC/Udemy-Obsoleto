// Desestructuración
// Asignación desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const context = ({ clave, nombre, edad, rango = 'capitán' }) => {
    // console.log( nombre, edad, rango );
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.21323,
            lng: -15.54875,
        }
    }
}

/* Tarea
    Desestructurar el objeto que devuelve context y
    obtener el nombre clave y la edad
*/
const { nombreClave, anios, latlng:{ lat, lng } } = context( persona );
console.log( nombreClave, anios );
console.log( lat, lng );