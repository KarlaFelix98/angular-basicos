import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";


//decorador para el ngmodule:
@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
      ContadorComponent
    ],
    //en imports van los modulos
    imports:[
        
    ]
})
export class ContadorModule{}