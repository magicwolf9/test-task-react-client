import UsersListPage from './usersList';
import {connect} from 'react-redux';
import {select} from "../../../model";

export default connect((state)=> ({
    users: state.users,
    initial: select.users.initial(state),
    loading: select.users.loading(state),
    loadingError: select.users.loadingError(state),
}))(UsersListPage);