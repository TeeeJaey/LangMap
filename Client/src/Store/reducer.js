
import Constants from "../Utils/Constants";
import Utilities from "../Utils/Utilities";
import Actions from "../Store/Actions";

let lastId = 0;
const defaultState = {tasks:[], openTasks:[], shownTaskId:-1};

function reducer(state = defaultState, action) 
{
    switch(action.type) 
    {
        case Constants.TaskAction.ToggleForm: {
            let newState = {...state};
            newState.taskForm = action.payload.taskForm;
            newState.openTasks = newState.tasks.filter(x => x.status != Constants.TaskStatus.DONE);
            return newState;
        }
        
        default: {
            return state;
        }
    }
}

export default reducer;

