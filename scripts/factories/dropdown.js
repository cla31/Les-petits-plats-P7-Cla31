class Ingredient {
    constructor(ingredient) {
        this.ingredient = ingredient.toLowerCase();
    }
    display() {
        return `
            <a class="dropdown-item blue ingredient" data-element="${this.ingredient}" href="#">${this.ingredient}</a>
        `
    }
}

class Device {
    constructor(appliance) {
        this.appliance = appliance.toLowerCase();
    }
    display() {
        return `
            <a class="dropdown-item green appliance" data-element="${this.appliance}" href="#">${this.appliance} </a>
        `
    }
}

class Ustensil {
    constructor(ustensil) {
        this.ustensil = ustensil.toLowerCase();
    }
    display() {
        return `
            <a class="dropdown-item red ustensil" data-element="${this.ustensil}"  href="#">${this.ustensil}</a>
        `
    }
}