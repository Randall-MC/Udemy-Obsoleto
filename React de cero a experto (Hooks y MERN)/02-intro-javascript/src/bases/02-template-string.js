console.log('Documento de prueba');

const nombre = 'Randall';
const apellido = 'Marquez';

// const nombreCompleto = nombre + ' '+ apellido;
const nombreCompleto = `
${nombre}
${apellido}
${1 + 1}`;

console.log( nombreCompleto );

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);