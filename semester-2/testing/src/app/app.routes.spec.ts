import { routes } from './app.routes';
import { UserDetailsComponent } from './integration-tests/3-user-details/user-details.component';

describe('routes', () => {
    it('should contain a route for /users', () => {
         expect(routes).toContain(    { path: 'users', component: UserDetailsComponent },
        )
    })
})