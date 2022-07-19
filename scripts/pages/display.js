//2.2 fonction qui permet d'afficher les recettes
function displayRecipes(recipesToDisplay) {
    // console.log("Les objets recette: ", objectRecipes);
    document.getElementById("recipesCards").innerHTML = ` ${recipesToDisplay.map( element =>  {return element.display()
    }).join('')}`;
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//2.3
function displayIngredientsFromRecipes(allRecipes) {
    let allIngredients = [];
    allRecipes.forEach(element => {
        // console.log("Array ingredient", element.ingredients);
        element.ingredients.forEach(index => {
            // console.log("Object ingredient", index.ingredient)
            allIngredients.push(index.ingredient);
        })
    });
    // console.log(allIngredients);
    // console.log("Les ingrédients dans un tableau", ingredients);
    allIngredients = [...new Set(allIngredients)].sort();
    // console.log(allIngredients);

    //Affichage des ingrédients via leur classe et leur fonction.
    ingredients = Objects(allIngredients, Ingredient);
    // console.log("Les objets ingrédients", ingredients);
    document.getElementById("ingredients").innerHTML = ` ${ingredients.map( element =>  {return element.display() }).join('')}`;

    //Préparation de l'affichage de chacun des ingrédients ds le DOM (récupération des classes dans un tableau pour générer l'affichage de tous les ingrédients)
    allIngredients = Array.from(document.querySelectorAll(".ingredient"));
    // console.log("ingredients à cliquer.....*****", allIngredients[14]);
    allIngredients.forEach((item) => {
        // console.log("ITEMMMM", item.dataset.element);
        //A chaque fois qu'on clique sur un item
        item.addEventListener("click", () => {
            // console.log("ITEMMMM", item.dataset.element);
            //On vérifie si l'élément est déjà là ou pas
            if (!chosenIngredients.includes(item.dataset.element.toLowerCase())) {
                chosenIngredients.push(
                    item.dataset.element.toLowerCase());
            }
            //On vide l'input
            document.querySelector("#inputBlue").value = '';
            orchestrator();
        });

    });
    // console.log("Tableau des tags selectionnés ds createIngredient....", chosenTags);

};
////////////////////////////////////////////////////////////////////////////
//2.3
//Les appareils
function displayAppliancesFromRecipes(allRecipes) {
    let allAppliances = [];
    allRecipes.forEach(element => {
        // console.log("Array ingredient", element.ingredients);
        // console.log("Object ingredient", index.ingredient)
        allAppliances.push(element.appliance);

    });
    // // console.log(allIngredients);
    // // console.log("Les ingrédients dans un tableau", ingredients);
    allAppliances = [...new Set(allAppliances)].sort();
    // console.log(allIngredients);

    // //Affichage des ingrédients via leur classe et leur fonction.
    appliances = Objects(allAppliances, Device);
    // console.log("Les objets appliances", allAppliances);
    document.getElementById("appliances").innerHTML = ` ${appliances.map( element =>  {return element.display() }).join('')}`;

    // //Préparation de l'affichage de chacun des ingrédients ds le DOM (récupération des classes dans un tableau pour générer l'affichage de tous les ingrédients)
    allAppliances = Array.from(document.querySelectorAll(".appliance"));
    // console.log("appareils à cliquer.....*****", allAppliances);

    allAppliances.forEach((item) => {
        //A chaque fois qu'on clique sur un item
        item.addEventListener("click", () => {
            // console.log("ITEMMMM", item.dataset.element);
            if (!chosenAppliances.includes(item.dataset.element.toLowerCase())) {
                chosenAppliances.push(
                    item.dataset.element.toLowerCase()
                );
            }
            //On vide l'input
            document.querySelector("#inputGreen").value = '';
            orchestrator();
        });
    });
};

////////////////////////////////////////////////////////////////////////////
//2.3
//Les ustensils
function displayUstensilsFromRecipes(allRecipes) {
    let allUstensils = [];
    allRecipes.forEach(element => {
        // console.log("Array ingredient", element.ingredients);
        element.ustensils.forEach(index => {
            // console.log("Object ingredient", index.ingredient)
            allUstensils.push(index);
        })
    });
    // console.log(allUstensils);
    allUstensils = [...new Set(allUstensils)].sort();

    // //Affichage des ingrédients via leur classe et leur fonction.
    ustensils = Objects(allUstensils, Ustensil);
    document.getElementById("ustensils").innerHTML = ` ${ustensils.map( element =>  {return element.display() }).join('')}`;

    // //Préparation de l'affichage de chacun des ingrédients ds le DOM (récupération des classes dans un tableau pour générer l'affichage de tous les ingrédients)
    allUstensils = Array.from(document.querySelectorAll(".ustensil"));
    // console.log("ingredients à cliquer.....*****", allIngredients);

    allUstensils.forEach((item) => {
        //A chaque fois qu'on clique sur un item
        item.addEventListener("click", () => {
            // console.log("ITEMMMM", item.dataset.element);
            if (!chosenUstensils.includes(item.dataset.element.toLowerCase())) {
                chosenUstensils.push(
                    item.dataset.element.toLowerCase()
                );
            }
            //         // console.log("Cliiiiiiqué!!!!!!!");
            //         // console.log("Tableau des tags selectionnés ds createIngredient....", chosenTags);
            //         // console.log("Les objets ingrédients dans createIngr+++++++++++++++", ingredients);
            //On vide l'input
            document.querySelector("#inputRed").value = '';
            orchestrator();
        });
    });

};