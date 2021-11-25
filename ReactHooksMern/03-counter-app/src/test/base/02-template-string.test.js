import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-strings', () => {

    test('getSaludo debe retornar Hola Randall!', () => {
        
        const nombre = "Randall";
        const saludo = getSaludo( nombre );
        expect( saludo ).toBe( 'Hola ' + nombre + '!' );

    });

    // getSaludo debe retornar Hola Yamal! si no hay argumento "nombre"
    test('getSaludo debe retornar Hola Yamal! si no hay argumento "nombre"', () => {
        
        const saludo = getSaludo();
        expect( saludo ).toBe( 'Hola Yamal!');

    });
});