import database from "../../firebase/firebase";

export const addProject = ( {titel="", description="", id=""}={} ) => ({
    type:"ADD_PROJECT",
    project: {
        titel,
        description,
        id
    }
})

export const a = ( project={} ) => {
    return (dispatch) => { 
    dispatch( addProject({ type:"ADD_PROJECT", ...project}) )
 }
}

export const addProjectDB = ( data ={} ) => {
	return (dispatch) => {
		const user = { ...data };
		database.ref('expenses').push(user).then((ref) => {
			dispatch(addProject( { id:ref.key, ...data } ))
		}) 
		} 
}

export const startSetExpenses = () => {
    return(dispatch) => {
        return database.ref("expenses").once("value").then( (snapshot) => {
        const expenses = [];
    
        snapshot.forEach( (childSnapshot) => {
            expenses.push({
                id:childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        
        dispatch(setExpenses(expenses));
        });
    };};

  


export const setExpenses = (expenses) => ({
    type:"SET",
    expenses
})