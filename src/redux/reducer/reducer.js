let initialState = {
    contactList:[],
    searchKey:"",
    deleteName:null,
    deleteNumber:0
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
        case "DELETENAME" :
            return {...state,deleteName:payload.deleteName}
        case "DELETENUMBER" :
            return {...state,deleteNumber:payload.deleteNumber}
        case "DELETEITEMS" :
            return {...state,contactList:payload.resultItems}
        default: return {...state};
    }
}

export default reducer;