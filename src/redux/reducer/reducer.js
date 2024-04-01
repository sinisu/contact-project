let initialState = {
    contactList:[],
    searchKey:""
};

function reducer (state=initialState,action) {
    const {type, payload} = action;
    switch(type) {
        case "ADD_CONTACT" :
            return{
                ...state,contactList:
                [...state.contactList,
                    {
                        name:payload.name,
                        number:payload.number,
                    }
                ]
            }
        case "SEARCH" :
            return{...state,searchKey:payload.searchKey}
        default: return {...state};
    }
}

export default reducer;