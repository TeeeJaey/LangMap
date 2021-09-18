
import Constants from "../Utils/Constants";
import LangService from "../services/LangService";

let lastId = 0;
const defaultState = {selectedLang:{}, LangMapList:[]};

export default function reducer(state = defaultState, action) 
{
    let service = new LangService();
    switch(action.type) 
    {
        case Constants.Actions.SetSelectedLang: {
            let newCode = action.payload.code;
            let oldCode = state.selectedLang.code;
            if(newCode !== oldCode) {
                let newState = {...state};
                service.setSelectedLang().then( response => {
                    newState.selectedLang = {...action.payload};
                    newState.LangMapList = [...response.LangMapList];
                    return newState;
                });
            }
            else
                return state;
        }
        
        default: {
            return state;
        }
    }
}
