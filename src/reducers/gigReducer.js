export const INITIAL_STATE = {
    userId: "",
    title: "",
    desc: "",
    likes: 0,
    filetype: "",
    brand: "",
    category: "",
    price: "",
    zipcode: "",
    image: "",
    tags: "",
    unlockcode: "",
    isPaid: false,
};

export const gigReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
            case "CHANGE_FILETYPE":
            return {
                ...state,
                filetype: action.payload,
            };
        case "CHANGE_CATEGORY":
            return {
                ...state,
                category: action.payload,
            };
        case "ADD_IMAGE":
            return {
                ...state,
                image: action.payload.image,
            };
        case "TOGGLE_IS_PAID": 
            return {
                ...state,
                isPaid: !state.isPaid,
            };
        default:
            return state;
    }
};
