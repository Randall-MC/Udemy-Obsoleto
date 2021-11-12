import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas en 09-promesas "resolves & rejects', () => {
    test('debe retornar un héroe "resolves"', () => {

        const id = 1;
        return expect( getHeroeByIdAsync( id )).resolves.toBe( heroes[0] );

    });

    test('debe retornar un mensaje de error "rejects"', () => {

        const id = 10;
        return expect( getHeroeByIdAsync( id )).rejects.toMatch('No existe ese id');

    });
});

// describe('Pruebas con 09-promesas "Método .then & .catch"', () => {
//     test('debe retornar un héroe ".then"', ( done ) => {
        
//         const id = 1;
//         getHeroeByIdAsync( id ).then( heroe => {

//             expect( heroe ).toBe( heroes[0] );
//             done();

//         });
//     });

//     test('debe retornar error si el id no existe ".catch"', ( done ) => {
        
//         const id = 200;
//         getHeroeByIdAsync( id ).catch( error => {

//             expect( error ).toBe('No existe ese id');
//             done();

//         });
//     });
// });