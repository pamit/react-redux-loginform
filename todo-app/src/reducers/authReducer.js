import * as actions from '../actions/actionTypes'

function authReducer(state = [], action) 
{
    switch(action.type) {
        case actions.AUTHENTICATED:
            // return action.token;
            return { ...state, authenticated: true };
        
        case actions.UnAUTHENTICATED:
            // return action.token;
            return { state: [], authenticated: false };

        default:
            return state;    
    }
}

export default authReducer