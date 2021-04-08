export default function CourseReducer(initialState=[], action){
    switch(action.type){
        case "CREATE_COURSE":
            return [...state, {...action.course}]
   
    default: 
    return state;
}