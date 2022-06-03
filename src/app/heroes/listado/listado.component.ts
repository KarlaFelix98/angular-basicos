import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['miss america', 'capitana marvel', 'mujer maravilla', 'spiderman'];
  
  borrarHeroe(){
    console.log('borranding...');
    const heroeBorrado = this.heroes.shift(); 
    console.log(heroeBorrado);
  }

}
