import Machine from '@qiwi/cyclone';
import users from '../../api/users';

const OK = 'ok';
const LOADING = 'loading';
const INITIAL = 'init';
const LOADING_ERROR = 'loading_error';
const machine = new Machine({
    initialState: INITIAL,
    initialData: {},
    transitions: {
        'init>loading': true,
        'loading>loading_error': (state, res) => res,
        'loading_error>init': true,
        'loading>ok': (state, res) => res
    }
});

export default {
    state: machine.current(),
    reducers: {
        next(prev, next, ...payload) {
            return machine.next(next, ...payload).current()
        }
    },
    effects: {
        async getUsers() {
            this.next(LOADING);
            try {
                const usersList = await users.getUsers();
                this.next(OK, usersList);
            } catch (err) {
                this.next(LOADING_ERROR, {...err, message: 'Что-то пошло не так, попробуйте позже'});
            }
        }
    },
    selectors: (slice, createSelector, hasProps) => ({
        loading() {
            return slice(users => {
                return users.state === LOADING;
            });
        },
        loadingError() {
            return slice(users => {
                return users.state === LOADING_ERROR;
            });
        },
        initial() {
            return slice(auth => {
                return auth.state === INITIAL;
            })
        },
    })
}
