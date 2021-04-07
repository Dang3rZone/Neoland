
async function getData(pPage, pType) {
    const url = `https://rickandmortyapi.com/api/${pType}/?page=${pPage}`
    const compresed = await fetch(url, { method: 'GET' }) //dato comprimido
    const descompresed = await compresed.json() //descomprimo

    console.log(descompresed.info);

    let nextPage = (descompresed.info.next != null) ? descompresed.info.next.split('=')[1] : null;
    let prevPage = (descompresed.info.prev != null) ? descompresed.info.prev.split('=')[1] : null;


    if (pType == "character") {
        printCharacter(descompresed.results, prevPage, nextPage); //template literal
    } else {
        printEpisodes(descompresed.results, prevPage, nextPage);
    }
}