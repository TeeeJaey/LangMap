
import Constants from '../Utils/Constants';

export default class LangService
{
    constructor() {
        this.url = Constants.APIUrl.base + Constants.APIUrl.langService;
    }

    setSelectedLang(reqObj={}) {
    }

}
