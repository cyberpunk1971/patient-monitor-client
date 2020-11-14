import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTranstion } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = props => {
    const content = (
        <CSSTranstion 
        in={props.show} 
        timeout={200} 
        classNames="slide-in-left" 
        mountOnEnter 
        unmountOnExit>
            <aside className="side-drawer">{props.children}</aside>
        </CSSTranstion>
    );

    return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;