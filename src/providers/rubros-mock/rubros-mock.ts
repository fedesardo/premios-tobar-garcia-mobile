import { Injectable } from '@angular/core';
import  rubros  from "../../assets/data/rubros-mock-data";

@Injectable()
export class RubrosMockProvider {

 findAll() {
        return Promise.resolve(rubros);
    }

    findById(id) {
        return Promise.resolve(rubros[id - 1]);
    }

}
