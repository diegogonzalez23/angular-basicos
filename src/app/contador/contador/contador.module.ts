import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador.component';
import { HeroesModule } from '../../heroes/heroes.module';
import { CommonModule } from "@angular/common";


@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ]
})
export class ContadorModule{

}