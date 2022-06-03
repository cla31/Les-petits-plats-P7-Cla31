// function displayRecipes(id, recipes) {
//     try {
//         document.getElementById(id).innerHTML = ` ${recipes.map( recipe =>  {return recipe.display()
//         }).join('')}`;
//     } catch (erreur) {
//         console.log(erreur);
//     }
// }

// function displayIngredients(id, ingredients) {
//     try {
//         document.getElementById(id).innerHTML = ` ${ingredients.map( element =>  {return element.display()
//         }).join('')}`;
//     } catch (erreur) {
//         console.log(erreur);
//     }
// }

function display(id, elements) {
    try {
        document.getElementById(id).innerHTML = ` ${elements.map( element =>  {return element.display()
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
        //Récupération des données pour les recettes et transformation en objets.
        const elements = jsonDatas.recipes;
        // console.log("Les recettes??: ", datasRecipes);
        const objectRecipes = Objects(elements, Recipe);
        // console.log("Les objets recette: ", objectRecipes);
        display("recipesCards", objectRecipes);
        //Création des objets ingrédients:
        // const elements = jsonDatas.recipes;
        const ingredientsData = [];
        // console.log("début de recherche ingrédient: ", elements);
        elements.forEach(element => {
            // console.log("Array ingredient", element.ingredients);
            element.ingredients.forEach(index => {
                // console.log("Object ingredient", index.ingredient)
                ingredientsData.push(index.ingredient);
            })
        });
        // console.log("Les ingrédients dans un tableau", ingredientsData);
        const ingredients = Objects(ingredientsData, Ingredient);
        console.log("Les objets ingrédients", ingredients);
        display("ingredients", ingredients);

    } catch (erreur) {
        console.log(erreur);
    }
}
orchestrator(pathJsonProject);