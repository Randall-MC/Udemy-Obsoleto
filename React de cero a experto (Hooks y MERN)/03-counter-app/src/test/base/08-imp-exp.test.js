import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en getHeroeById', () => {

    test('Debe regresar un héroe por ID', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id);

        expect( heroe ).toEqual( heroeData );
    });

    test('Debe retornar undefined si héroe no existe', () => {
        
        const id = 20;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );
    });
});

describe('Pruebas en getHeroeByOwner', () => {

    test('Debe retornar un Array con los héroes de DC', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        const heroesDC = heroes.filter( ( h ) => h.owner === owner );

        expect( heroes ).toEqual( heroesDC );
        
    });
    
    test('Debe retornar la cantidad de héroes de Marvel', () => {

        const owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner( owner );

        expect( heroesMarvel.length ).toBe( 2 );

    });

    test('Debe retornar un arreglo vacio cuando no existe "owner"', () => {

        const owner = 'Owner';
        const heroes = getHeroesByOwner( owner );

        expect( heroes ).toEqual( [] );
    
    });
});