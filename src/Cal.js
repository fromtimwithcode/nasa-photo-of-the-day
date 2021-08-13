import React from "react";
import styled from 'styled-components'

const StyledDiv = styled.div`
    padding: 20px;
    background-color: #f72585;
    color: #480ca8;
`

function Calendar(props) {
    const { dateSelect } = props;

    return (
        <StyledDiv>
            <p>Select other photo by date:</p>
            <input id='calendar' type='date' onChange={ (e) => {
                e.persist();
                dateSelect(e.target.value);
            } } />
        </StyledDiv>
    )
}

export default Calendar;