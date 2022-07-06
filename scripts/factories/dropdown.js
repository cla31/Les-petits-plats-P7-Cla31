class Ingredient {
    constructor(ingredient) {
        this.ingredient = ingredient.toLowerCase();
        this.background = "#007bff";
        // console.log("L'ingredient dans l'objet", this.ingredient)
    }
    display() {
        return `
            <a class="dropdown-item blue ingredient" data-element="${this.ingredient}" data-color="blue" data-type="ingredient" data-background=${this.background} href="#">${this.ingredient}</a>
        `
    }
}

class Device {
    constructor(appliance) {
        this.appliance = appliance.toLowerCase();
        this.background = "#28a745";
        // console.log("L'appareil dans l'objet", this.appliance)
    }
    display() {
        return `
            <a class="dropdown-item green appliance" data-element="${this.appliance}" data-color="green" data-type="appliance" data-background=${this.background} href="#">${this.appliance} </a>
        `
    }
}

class Ustensil {
    constructor(ustensil) {
        this.ustensil = ustensil.toLowerCase();
        this.background = "#dc3545";
    }
    display() {
        return `
            <a class="dropdown-item red ustensil" data-element="${this.ustensil}" data-color="red" data-type="ustensil" data-background=${this.background} href="#">${this.ustensil}</a>
        `
    }
}