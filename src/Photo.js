import React, { useState } from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
    height: 50%;
    border-radius: 15px;
`
const StyledImg = styled.img`
    border-radius: 100px;
`

function Photo(props) {
    const { potd } = props;

    return (
        <StyledDiv>
            <StyledImg src={ potd } alt='Astronomy Pic of the Day'/>
        </StyledDiv>
    )
}

export default Photo;