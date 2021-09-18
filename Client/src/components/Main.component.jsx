
import React, { Component } from 'react';
import { withResizeDetector } from 'react-resize-detector';
import Swal from 'sweetalert2'
import { LangProvider } from '../services/LangContext';
import Header from './Header.component'

class MainComponent extends Component 
{
    render() 
    { 
		return  <LangProvider>
                    <Header/>
                </LangProvider>;
    }

}

const AdaptiveWithDetector = withResizeDetector(MainComponent);
const Main = () => {
    return (
        <AdaptiveWithDetector />
    );
};
  
export default Main;