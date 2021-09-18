
import Constants from "../Utils/Constants";

export default class Actions {

    static SetSelectedLang(lang) {
        return {
            type: Constants.Actions.SetSelectedLang,
            payload: lang
        }
    }

}