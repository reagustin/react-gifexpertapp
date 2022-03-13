


// el getGifs, hace el fetch del api, y almacena 3 datos, la respuesta es iterada con el map, y cada objeto creado se almacena en el arreglo Gifs
  // se almacena usando el setImages.
  export const getGifs = async( category ) => {
    const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=mvGmDd2Q2wY3bZfpEiUNS1hsSYoKBJAG`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      }
    })
  
    return gifs;

    /* console.log(gifs);
    setImages(gifs); */ //almacena en el arreglo images todos los objetos almacenas previamente en gifs en la iteracion .map
  }