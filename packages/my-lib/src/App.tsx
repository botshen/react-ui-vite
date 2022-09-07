import styled from 'styled-components';
import Icon from "./lib/Icon";
import Button from './lib/MyButton';
import React from "react";

const fn: React.MouseEventHandler = (e) => {
    console.log(e.target)
}

function App() {
    return (
        <Wrapper>
            <Icon name='wechat' onClick={fn}/>
            <Icon name='meituan'/>
            <Button></Button>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;
`;

export default App;
