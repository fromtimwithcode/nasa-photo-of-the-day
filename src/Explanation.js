import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: auto;
    width: 75%;
    text-align: center;
`

function Explanation(props) {
    const { explanation } = props;
    return (
        <StyledDiv>
            <p>{explanation}</p>
        </StyledDiv>
    )
}

export default Explanation;