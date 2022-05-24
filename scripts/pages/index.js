async function orchestrator(pathJson) {
    try {
        const jsonDatas = await getDatas(pathJson);
        const datasRecipes = jsonDatas.recipes;
        console.log("Les recettes??: ", datasRecipes);

    } catch (erreur) {
        console.log(erreur);
    }
}
orchestrator(pathJsonProject);