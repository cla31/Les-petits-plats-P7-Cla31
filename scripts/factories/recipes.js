class Recipe {
    constructor(datas) {
        this.id = datas.id;
        this.image = datas.image;
        this.name = datas.name;
        this.servings = datas.servings;
        this.ingredients = datas.ingredients;
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
                <img src="./assets/recipes/${this.image}" alt="${this.name}">
                <div class="card-body">
                    <div class="card-body__header">
                        <h2 class="card-title">${this.name}</h2>
                        <div class="time">
                            <p class="minutes">
                                <span class="icon-minutes">
                                    <img src="assets/images/time.svg" alt="">
                                </span>${this.time}
                            </p>
                        </div>
                    </div>
                    <div class="main-card">
                        <ul class="ingredients">
                            <li>
                                <strong>Thon rouge (ou blanc) :</strong> 200 grammes
                            </li>
                            <li>
                                <strong>Concombre :</strong> 1
                            </li>
                            <li>
                                <strong>Tomate :</strong> 2
                            </li>
                            <li>
                                <strong>Carotte :</strong> 1
                            </li>
                            <li>
                                <strong>Citron vert :</strong> 5
                            </li>
                            <li>
                                <strong>Lait de coco :</strong> 100 ml
                            </li>
                        </ul>
                        <p class="card-text col-7 ">${this.description}</p>
                    </div>
                </div>
            </div>
        </article>
    `
    }

}