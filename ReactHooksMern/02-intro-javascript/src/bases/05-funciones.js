/*
Funciones

--- Function Declaration ---
function saludar(nombre) {
    return `Hola, ${nombre}`;
}

--- Function Expression ---
const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

--- Arrow Function ---
const saludar = (nombre) => {
    return `Hola, ${nombre}`;
} 

saludar = 30;
*/

const saludar = nombre => `Hola, ${nombre}`;
const holaMundo = () => `Hola mundo`;

const getUser = () => ({    
    uid: 'ABC123',
    username: 'El pikapapi09',
})

console.log( saludar('Goku') );
// console.log( saludar );
console.log( holaMundo() );

const user = getUser();
console.log( user );

/*
 Tarea
    1. Transformar "getUsuarioActivo" en una dunción de flecha 
    2. Debe retornar un objeto implícito
    3. Hacer pruebas
*/
// function getUsuarioActivo( nombre ) {
//     return {
//         uid: 'ABS5K',
//         username: nombre
//     }
// };
const getUsuarioActivo = nombre => ({
    uid: 'AS457',
    username: nombre
})

const usarioActivo = getUsuarioActivo('Randall');
console.log(usarioActivo);