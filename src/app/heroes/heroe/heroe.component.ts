import { Component } from "@angular/core";

@Component({
selector:'app-heroe',
templateUrl:'heroe.component.html'
})

export class HeroeComponent{
    nombre: string ='Ironman';
    edad: number = 45;

    //crear una propiedad procesada:
    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        // return this.nombre + ' - ' + this.edad.toString(); es lo mismo que:
        return `${this.nombre} - ${this.edad}`;
    }

    //void es porque no va a retornar nada
    cambiarNombre(): void {
        this.nombre = 'spiderman';
    }

    cambiarEdad(): void {
        this.edad = 25;
    }
}