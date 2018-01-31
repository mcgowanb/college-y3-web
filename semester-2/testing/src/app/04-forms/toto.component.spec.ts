import { TodoFormComponent } from './todo.component'
import { FormBuilder } from '@angular/forms';

describe('TodoFormComponent', () => {
    let comp: TodoFormComponent;

    beforeEach(() => {
        comp = new TodoFormComponent(new FormBuilder());
    })

    it('should create a form with 2 controls', () => {
       expect(comp.form.contains('name')).toBeTruthy();
       expect(comp.form.contains('email')).toBe(true);
    });

    it('should make the name control required.', () => {
        let control = comp.form.get('name')
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });
})