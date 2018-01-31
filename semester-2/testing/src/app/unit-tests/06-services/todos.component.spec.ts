import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);

  });

  it('should set todos property with items returned from the server', () => {

    let todos = [
      { id: 1, title: 'a' },
      { id: 2, title: 'b' },
      { id: 3, title: 'c' },
    ];

    let spy = spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([todos]);
    });
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
    expect(component.todos).toBe(todos);
  });


  it('should call the server to save changes when a new item is added', () => {
    let spy = spyOn(service, "add").and.callFake(() => {
      return Observable.empty();
    })
    component.add();
    expect(spy).toHaveBeenCalled();
  });

  it('should add the new todo from the server', () => {
    let todo = { id: 1 };
    spyOn(service, "add").and.returnValue(Observable.from([todo]));
    component.add();
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });


  it('should fill the message property when an error', () => {
    let msg = 'silly message here';
    spyOn(service, "add").and.returnValue(Observable.throw(msg));
    component.add();
    expect(component.message).toBe(msg);
  });

  it('should call the server to delete an item if the user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());
    
    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should not call the server to delete an item if the user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());
    
    component.delete(1);

    expect(spy).not.toHaveBeenCalled();
  });
});