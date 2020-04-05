import React, {useState} from 'react';
import {Container} from './style';
import { CSSTransition } from 'react-transition-group'

function Album (props) {
  const [showStatus, setShowStatus] = useState (true);
  return (
    <CSSTransition
    in={showStatus}  
    timeout={300} 
    classNames="fly" 
    appear={true} 
    unmountOnExit
    onExited={props.history.goBack}
  >
    <Container>
    </Container>
  </CSSTransition>
  )
}

export default Album;