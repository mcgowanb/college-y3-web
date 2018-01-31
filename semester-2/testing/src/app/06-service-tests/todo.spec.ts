import { ToDoComponent } from './todo.component'
import { ToDoService } from './todo.service'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('ToDoComponent', () => {
    let component: ToDoComponent;
    let service: ToDoService;
    beforeEach(() => {
        service = new ToDoService(null);
        component = new ToDoComponent(service);
    });

    it('should call server on ngoninit', () => {
        let fakeData = [1, 2, 3];
        let spy = spyOn(service, 'getTodos').and.callFake(t => {
            return Observable.empty();
        });
        component.ngOnInit();
        expect(spy).toHaveBeenCalled();
    });

    it('should return data from server call on ngoninit and populate todos array', () => {
        let fakeData = [1, 2, 3];
        let spy = spyOn(service, 'getTodos').and.returnValue(Observable.from([fakeData]));
        component.ngOnInit();
        expect(component.todos).toBe(fakeData);
    });

    it('should call add to the server', () => {
        let spy = spyOn(service, 'add').and.returnValue(Observable.empty());
        component.add(null);
        expect(spy).toHaveBeenCalled();
    });

    it('should add data to the array when add is called', () => {
        let fakeData = {id : 1};
        let spy = spyOn(service, 'add').and.returnValue(Observable.from([fakeData]));
        component.add(fakeData);
        expect(component.todos.indexOf(fakeData)).toBeGreaterThan(-1);
    });

    it('should set the message property on error when adding a new object', () => {
        let msg = 'silly message';
        let spy = spyOn(service, 'add').and.returnValue(Observable.throw(msg));
        component.add(null);
        expect(component.error).toBe(msg);
    });

    it('should call the server to delete the item if the user confirms', () => {
        spyOn(window, 'confirm').and.returnValue(true);
        let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());
        component.delete(1);
        expect(spy).toHaveBeenCalledWith(1);
    });
    //x stops the test from running
    it('should not call the server to delete the item if the user cancells', () => {
        spyOn(window, 'confirm').and.returnValue(false);
        let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());
        component.delete(1);
        expect(spy).not.toHaveBeenCalled();
    });
})