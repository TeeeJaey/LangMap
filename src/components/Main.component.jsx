
import React, { Component } from 'react';
import { LangProvider } from '../services/LangContext';
import Header from './Header.component'

class Main extends Component 
{
    render() 
    { 
		return  <LangProvider>
                    <Header/>
                </LangProvider>;
    }

}
export default Main;