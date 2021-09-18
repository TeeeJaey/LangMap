
import Constants from '../Utils/Constants';
import ApiService from './ApiService';

export default class LangService
{
    constructor() {
        this.url = Constants.APIUrl.base + Constants.APIUrl.langService;
    }

    setSelectedLang(reqObj={}) {
        /* Request structure
        reqObj = {
            "langCode":"en-GB"
        };
        */
        let reqUrl = this.url + "setSelectedLang";
        let apiService = new ApiService("POST", reqUrl , reqObj );
        return apiService.getResponse();
    }

}
