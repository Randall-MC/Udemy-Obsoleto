import { getHeroeById } from "./08-imp-exp";

// const promesa = new Promise( (resolve, reject) => {
//     /* Tarea 
//         Importar funciones del archivo 08-imp-exp.js 
//     */
//     setTimeout( () => {
//         const heroe = getHeroeById(1);
//         resolve( heroe );
//         reject( 'No se encontró ningún heroe' );
//     }, 2000)
// });

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        /* Tarea 
            Importar funciones del archivo 08-imp-exp.js
            Llamar al reject si el objeto no existe
        */
        setTimeout( () => {
            const heroe = getHeroeById(id);
            if ( heroe ) {
                resolve( heroe );
            } else {
                reject( 'No se encontró ningún heroe' );
            }
        }, 2000)
    });
}

getHeroeByIdAsync(2)
    .then( console.log )
    .catch( console.warn );
// .then( heroe => console.log( 'El heroe es', heroe ))
// .catch( err => console.warn( err ));
