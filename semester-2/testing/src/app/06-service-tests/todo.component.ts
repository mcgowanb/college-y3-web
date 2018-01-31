import { ToDoService } from './todo.service';

export class ToDoComponent {
    todos: any[] = [];
    error: string;
    constructor(private _service: ToDoService) {

    }

    ngOnInit() {
        this._service.getTodos().subscribe(res => this.todos = res)
    }

    add(obj) {
        this._service.add(obj).subscribe(res => {
            this.todos.push(res)
        },
            error => {
                this.error = error
            }
        )
    }

    delete(id){
        if(confirm('are you sure'))
        this._service.delete(id).subscribe();
    }
}