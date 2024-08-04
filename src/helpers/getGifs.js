
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=1&api_key=yxb69mcVSOs4rAu01GmY5tQbyineDVno`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(gif=>{
        return{
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized.url,
        }
    })
   
    return gifs;
}