class Recipe {
    constructor(datas) {
        this.id = datas.id;
        this.image = datas.image;
        this.name = datas.name;
        this.servings = datas.servings;
        this.ingredients = datas.ingredients;
        // console.log("Les ingrédients", this.ingredients[0])
        this.time = datas.time;
        this.description = datas.description;
        this.appliance = datas.appliance;
        this.ustensils = datas.ustensils;
    }


    //Fonction qui gère l'affichage du template de la gallerie:
    display() {
            return `   
        <article class="col-12 col-lg-4">
            <div class="card">
                <div class="container-img">
                    <img class="imgRecipe" src="./assets/recipes/${this.image}" alt="${this.name}">
                </div>
                <div class="card-body">
                    <div class="card-body__header">
                        <h2 class="card-title">${this.name}</h2>
                        <div class="time">
                            <div class="minutes">
                                <span class="icon-minutes"><img src="assets/images/time.svg" alt="icone horloge"> </span>${this.time} min                                                                   
                            </div>
                        </div>
                    </div>
                    <div class="main-card">
                        <ul class="ingredients">
                            ${this.ingredients.map((data)=>
                                `
                                    <li> 
                                    <strong>${data.ingredient}: </strong>${"quantity" in data?data.quantity:""} ${"unit" in data ? data.unit : ""}
                                    </li>                                                          
                                `
                                ).join("")}                            
                        </ul>
                        <p class="card-text">${this.description}</p>
                    </div>
                </div>
            </div>
        </article>
    `
    }

}