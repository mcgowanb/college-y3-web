import { IProduct } from '../app/product-list/IProduct';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class DataService {

  constructor(private _http: Http) { }

  private _errorHandler(error: Response) {
    console.error(error);
    return Observable.throw({ message: "Something happened", code: error.status });
  }

  getProductsList() {
    return this._http.get('assets/json/products.json')
      .map((res: Response) => <IProduct[]>res.json())
      .catch(this._errorHandler);
  }
}
