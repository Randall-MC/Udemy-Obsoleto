import { getImagen } from "../../base/11-async-await";

describe('Pruebas con async, await y fetch', () => {
    test('Debe retornar el url de una imagen', async () => {
        
        const url = await getImagen();
        console.log( url );
        expect( url.includes('https://') ).toBe( true );

    })
});