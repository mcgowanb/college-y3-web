import { UserDetailsComponent } from "./integration-tests/3-user-details/user-details.component";
import { TodosComponent } from "./integration-tests/2-todos/todos.component";
import { AppComponent } from "./app.component";




export const routes = [
    { path: 'users/:id', component: UserDetailsComponent },
    { path: 'users', component: UserDetailsComponent },
    { path: 'todos', component: TodosComponent },
    { path: '', component: AppComponent }
]