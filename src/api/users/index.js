import {HttpService} from '@qiwi/let-fly-at-http';
import config from '../../config';
import {UsersError} from "../../error/usersError";
import localStorage from '../../storage/localStorage'

const httpClient = new HttpService(config.apiUrl, {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    credentials: 'include'
});
export default {
    async getUsers() {
        try {
            return await httpClient.get('users/items', {}, {headers: {'Authorization': `Bearer ${localStorage.getItem('jwt')}`}});
        } catch (err) {
            throw new UsersError(UsersError.LOADING_ERROR);
        }

    }
}