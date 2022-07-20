const pathJsonProject = "./datas/recipes.json";
async function getDatas(pathJson) {
    try {
        const fetchJson = await fetch(pathJson);
        const backFetch = await fetchJson.json();
        return backFetch;
    } catch (erreur) {
        console.log(erreur);
    }
}