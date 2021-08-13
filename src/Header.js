import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
    flex-direction: column;
    width: 100%;
    background-color: #f72585;
    color: #480ca8;
`

const StyledChild = styled.div`
    margin: 8px;
`

function Header(props) {
    const { copyright, date, title } = props;

    return (
        <StyledDiv>
            <StyledChild>
                { <h1>Astronamy Photo of the Day</h1> }
            </StyledChild>
            <StyledChild>
                { title && <h3>Title: {title}</h3> }
            </StyledChild>
            <StyledChild>
                { date && <h3>Date: {date}</h3> }
            </StyledChild>
            <StyledChild>
                { copyright && <h3>Copyright: {copyright} </h3>}
            </StyledChild>
        </StyledDiv>
    )
}

export default Header;