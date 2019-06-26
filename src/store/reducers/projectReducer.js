export const projectReducer = (state = [], action) => {
    switch(action.type){
        case "ADD_PROJECT":
            console.log(state);
            return [...state, action.project]
        case "SET":
            console.log(action)
            return state=action.expenses
        default:
            return state
    }


}
