import UsersListPage from './usersList';
import {connect} from 'react-redux';
import {select} from "../../../model";

export default connect((state)=> ({
    users: select.users,
    loading: select.users.loading(state),
    loadingError: select.users.loadingError(state),
}))(UsersListPage);