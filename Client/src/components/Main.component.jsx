
import React, { Component } from 'react';
import { withResizeDetector } from 'react-resize-detector';
import Swal from 'sweetalert2'
import Header from './Header.component'

class MainComponent extends Component 
{
    render() 
    { 
		return <div>
                <Header/>
            </div>;
    }

}

const AdaptiveWithDetector = withResizeDetector(MainComponent);
const Main = () => {
    return (
        <AdaptiveWithDetector />
    );
};
  
export default Main;