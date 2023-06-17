import { UserApi } from "../../api/UserApi";
import { CoreApi } from "../../api/CoreApi";
import { CreditApi } from "../../api/CreditApi";

const SET_CLIENTS = 'SET_CLIENTS';
const UPDATE_NEW_CLIENT = 'UPDATE_NEW_CLIENT';
const CLEAR_NEW_CLIENT = 'CLEAR_NEW_CLIENT';

let initialState = {
    clients: [],
    newClient: {
        name: '',
        lastname: '',
        password: ''
    }
}

const ClientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CLIENTS: {
            return {
                ...state,
                clients: action.clients
            }
        }
        case UPDATE_NEW_CLIENT: {
            return {
                ...state,
                newClient: action.newClient
            }
        }
        case CLEAR_NEW_CLIENT: {
            return {
                ...state,
                newClient: {
                    name: '',
                    lastname: '',
                    password: ''
                }
            }
        }
        default:
            return state;
    }
};

// ACTIONS
// �������� ������ �������� ����� ��������� ������ � �������
export const setClientsActionCreator = (clients) => {
    return {
        type: SET_CLIENTS,
        clients: clients
    }
};
// �������� ��������� ������������ �������
export const updateNewClientActionCreator = (newClient) => {
    return {
        type: UPDATE_NEW_CLIENT,
        newClient: newClient
    }
}
// �������� ������ � ��������� �������
export const clearNewClientActionCreator = () => {
    return {
        type: CLEAR_NEW_CLIENT
    }
}

// THUNKS
// �������� ���� �������� � �� ����� � �������
const connectClientsAndAccounts = async (clients) => {
    await Promise.all(clients.map(client => {
        return CoreApi.getAllUserAccounts(client.userID)
            .then(data => {
                client.accounts = [...data.accounts];
            })
    }))

    return clients;
}
export const getClientsThunkCreator = () => {
    return (dispatch) => {
        UserApi.getAllUsers()
            .then(allUsers => {
                let allClients = allUsers.filter(user => user.role == 0);
                connectClientsAndAccounts(allClients)
                    .then(allClientsWithAccounts => {
                        dispatch(setClientsActionCreator(allClientsWithAccounts));
                    })
            })
    }
}
// ������������� ������� �� �������
export const blockAnClientThunkCreator = (clientId) => {
    return (dispatch) => {
        UserApi.blockUser(clientId)
            .then(() => {
                UserApi.getAllUsers()
                    .then(allUsers => {
                        let allClients = allUsers.filter(user => user.role == 0);
                        connectClientsAndAccounts(allClients)
                            .then(allClientsWithAccounts => {
                                dispatch(setClientsActionCreator(allClientsWithAccounts));
                            })
                    })
            })
    }
}
// ������� ������� �� �������
export const createNewClientThunkCreator = (newClient) => {
    return (dispatch) => {
        UserApi.registerClient(newClient.name, newClient.lastname, newClient.password)
            .then(() => {
                dispatch(clearNewClientActionCreator())
                UserApi.getAllUsers()
                    .then(allUsers => {
                        let allClients = allUsers.filter(user => user.role == 0);
                        connectClientsAndAccounts(allClients)
                            .then(allClientsWithAccounts => {
                                dispatch(setClientsActionCreator(allClientsWithAccounts));
                            })
                    })
            })
    }

}

export default ClientsReducer;