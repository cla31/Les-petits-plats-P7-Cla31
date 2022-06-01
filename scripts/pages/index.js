function displayRecipes(id, recipes) {
    try {
        document.getElementById(id).innerHTML = ` ${recipes.map( recipe =>  {return recipe.display()
        }).join('')}`;
    } catch (erreur) {
        console.log(erreur);
    }
}


function Objects(elements, Instance) {
    try {
        objectElements = elements.map(function instance(recipe) {
            return new Instance(recipe);
        });
        return objectElements;
    } catch (erreur) {
        console.log(erreur);
    }
}




async function orchestrator(pathJson) {
    try {
        const jsonDatas = await getDatas(pathJson);
        const datasRecipes = jsonDatas.recipes;
        console.log("Les recettes??: ", datasRecipes);
        const objectRecipes = Objects(datasRecipes, Recipe);
        console.log("Les objets recette: ", objectRecipes);
        displayRecipes("recipesCards", objectRecipes);

    } catch (erreur) {
        console.log(erreur);
    }
}
orchestrator(pathJsonProject);