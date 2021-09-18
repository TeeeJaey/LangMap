
import React from 'react';
import { useState } from 'react';
import Flags from 'country-flag-icons/react/3x2';
import { hasFlag } from 'country-flag-icons'
import Constants from '../Utils/Constants'

import Actions from "../Store/Actions";
import { useDispatch, useSelector, useStore } from 'react-redux';

function LanguageSelector(props) {
    const [showDropdown, setShowDropdown] = useState("none");
    const [langList, setLangList] = useState(Constants.LanguageCodes);
    const [search, setSearch] = useState("");
    
    const dispatch = useDispatch();
    const selectedLang = useSelector(state => state.selectedLang);

    const toggleDropdown = function() {
        searchChange("");
        if(showDropdown == "none") setShowDropdown("block");
        else setShowDropdown("none");
    };

    const langChange = function(lang) {
        const req = {langCode:lang.code};
        service.setSelectedLang(req).then(response => {
            newState.selectedLang = {...action.payload};
            newState.LangMapList = [...response.LangMapList];
            dispatch(Actions.SetSelectedLang(lang));
            return newState;
        });
        toggleDropdown();
    };

    const searchChange = function(str) {
        setSearch(str);
        setLangList([...Constants.LanguageCodes.filter(x => x.desc.toUpperCase().includes(str.toUpperCase()))]);
    };

    let flagImage = null;
    let languageDesc = "Select Language";
    if(selectedLang && selectedLang.code) {
        const country = selectedLang.code.split('-')[1];
        if(hasFlag(country)) {
            const FlagComponent = Flags[country];
            flagImage = <FlagComponent title={country} style={{ width: '25px'}} />
        }
        languageDesc = selectedLang.desc.split('(')[0];
    }
    
    let langListRender = [];
    langListRender.push(<input type="text" value={search} onChange={e => searchChange(e.target.value)} style={{width:"90%",margin:'5px'}} />);

    langList.forEach(obj => {
        const country = obj.code.split('-')[1];
        let selected = "";
        if(hasFlag(country)) {
            if(selectedLang && selectedLang.code && obj.code === selectedLang.code)
                selected = "selected";

            const ObjFlagComponent = Flags[country];
            langListRender.push(<a key={obj.code} className={"dropdown-item language-selector-item " + selected} onClick={()=>langChange(obj)}  > 
                                    <ObjFlagComponent title={obj.code} className="flagIcon" />  
                                    <span className="ellipsis"> {obj.desc} </span> 
                                </a>);
        }
    });

    return <div className="dropdown" style={{marginRight:"5px"}} > 
                <button className="btn btn-success dropdown-toggle language-selector-btn" type="button" onClick={toggleDropdown} >
                    {flagImage} <span className="langDesc" > {languageDesc} </span>
                </button>
                <div className="dropdown-menu dropdown-menu-right language-selector-container" style={{display: showDropdown}} >
                    {langListRender}
                </div>
            </div>;
}

export default LanguageSelector;