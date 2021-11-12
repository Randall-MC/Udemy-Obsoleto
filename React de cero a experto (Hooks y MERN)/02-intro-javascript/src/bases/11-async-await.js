/* Promises
const getImagenPromesa = () => new Promise( resolve => resolve( 'https://aplskdem.com'));

getImagenPromesa().then( console.log ); 
*/

// Async - Await
const getImagen = async () => {

    try {

        const apiKey = '7lzYojlBiNRszuBr2qtABheS4ntS1etn';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        /* Tarea 
            - Tomar la data y mostar la imagen
         */
        const { url } = data.images.original;
        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);

    } catch (error) {
        // Manejo del error
        console.error( error );
    }

}

getImagen();