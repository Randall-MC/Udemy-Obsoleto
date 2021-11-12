import { retornaArreglo } from "../../base/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {

    test('retornaArreglo retorna un arreglo [string, number]', () => {
        
        const [ letters, numbers ] = retornaArreglo(); // [ 'ABC', 123 ]

        expect( letters ).toBe( 'ABC' );
        expect( typeof letters ).toBe( 'string' );

        expect( numbers ).toBe( 123 );
        expect( typeof numbers ).toBe( 'number' );

    })
    
});