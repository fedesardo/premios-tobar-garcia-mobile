import { Injectable } from '@angular/core';
import  jurados  from "../../assets/data/jurado-mock-data";


@Injectable()
export class JuradosMockProvider {

  findAll() {
        return Promise.resolve(jurados);
    }

    findById(id) {
        return Promise.resolve(jurados[id - 1]);
    }

}
