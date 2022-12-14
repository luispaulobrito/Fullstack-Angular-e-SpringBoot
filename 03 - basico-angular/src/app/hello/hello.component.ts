import { Component } from "@angular/core";

@Component({
    selector: 'hello',
    templateUrl: './hello.component.html'
})
export class HelloComponent{

    clientes : Cliente[];

    constructor(){
        let luis = new Cliente('Luis Paulo',32);
        let jose = new Cliente('José Vasconcelos',28);
        let dani = new Cliente('Daniel Oton', 22);
        this.clientes = [luis, jose, dani];
    }
}

class Cliente {
    constructor(
      public nome: string,
      public idade: number
    ){}
}
