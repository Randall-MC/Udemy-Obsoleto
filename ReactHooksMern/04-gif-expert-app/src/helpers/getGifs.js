export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=s4kaGmu64b7YqHI82KwuMtHWeL9M1lbj`;
    const response = await fetch( url );
    const { data } = await response.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized.url
        }
    })

    return gifs;

}