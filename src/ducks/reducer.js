const initState = {
    firstname: "",
    lastname: "",
    email: "",
    id: 0,
};

const SET_USER = 'SET_USER';
function reducer(state = initState, action)
{
    switch(action.type)
    {
        case SET_USER:
            return {...action.payload}
        default:
            return {...state};
    }
}
export default reducer;

export function setUser(user)
{
    return {
        action: SET_USER,
        payload: user
    };
}