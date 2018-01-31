import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


export class ToDoService{
    constructor(private _http: Http){}

    add(todo){
        return this._http.post('...', todo).map(r => r.json());
    }

    getTodos(){
        return this._http.get('...').map(r => r.json());
    }

    delete(id){
        return this._http.delete('...').map(r => r.json());
        
    }
}