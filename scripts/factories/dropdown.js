class Ingredient {
    constructor(ingredient) {
        this.ingredient = ingredient;
        // console.log("L'ingredient dans l'objet", this.ingredient)
    }
    display() {
        return `
            <a class="dropdown-item blue" href="#">${this.ingredient}</a>
        `
    }
}