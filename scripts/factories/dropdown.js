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

class Device {
    constructor(appliance) {
        this.appliance = appliance;
        // console.log("L'appareil dans l'objet", this.appliance)
    }
    display() {
        return `
            <a class="dropdown-item green" href="#">${this.appliance}</a>
        `
    }
}

class Ustensil {
    constructor(ustensil) {
        this.ustensil = ustensil;
    }
    display() {
        return `
            <a class="dropdown-item red" href="#">${this.ustensil}</a>
        `
    }
}