const personajes = [ 'Goku', 'Vegeta', 'Trunks' ];
const [ , , p3 ] = personajes;
console.log( p3 );

// const retornaArreglo = () => {
//     return [ 'ABC', 123 ]
// };
// Se puede simplificar de la siguiente manera
const retornaArreglo = () => ([ 'ABC', 123 ]);

const [ letras, numeros ] = retornaArreglo();
console.log( letras, numeros );

/* Tarea 
    1. El primer valor del array  debe llamarse "nombre"
    2. El segungo valor debe llamarse "setNombre"
*/
const state = ( valor ) => {
    return [ valor, () => { console.log( 'Hola mundo' )}];
}
const [ nombre, setNombre ] = state( 'Prueba' );
console.log( nombre );
setNombre();