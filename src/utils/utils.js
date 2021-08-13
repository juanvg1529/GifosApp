
export const apiRequest=(link)=>{
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=OBBzzXm9g5kiOcuF9MgaX4zTuCHy1t7j&q=${link}&limit=12&offset=0&rating=g&lang=en`);
} 

export const apiSugest=(link)=>{
    return fetch(`https://api.giphy.com/v1/gifs/search?/tags?api_key=OBBzzXm9g5kiOcuF9MgaX4zTuCHy1t7j&q=${link}&limit=12&offset=0&rating=g&lang=en`);
}