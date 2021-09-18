
import LanguageSelector from './LanguageSelector.component';
import React, { Component } from 'react';


function selectLang(key,val) {
    return;
}

function Header() {

    const inputStyle = {
    };
    let dropdownData = {label:"Language", list:["Spa","Hin","Fra","Jap"]};
    return <div class="mainHeader" >
            <span className="heading-label">LangMap</span>
            <button className="btn btn-primary" type="button" style={{minWidth:'150px', marginBottom:"5px", marginRight:"5px"}} >
                Search a word
            </button>
            
            <button className="btn btn-primary" type="button" style={{minWidth:'150px', marginBottom:"5px", marginRight:"5px"}}  >
                Use google Translate
            </button>

            <LanguageSelector style={{minWidth:'150px', marginBottom:"5px", marginRight:"5px"}} />
    </div>;
}

export default Header;