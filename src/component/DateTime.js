import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


export const DateTime = () =>{
    let [date,setDate] = useState(new Date());

    useEffect(()=>{
        let timer = setInterval(()=> setDate (new Date ()), 1000)
        return function cleanup(){
            clearInterval(timer)
        }
    });

    return(
        <StyledDiv>
            <StyledP>{date.toLocaleDateString()}</StyledP>
            <StyledP>{date.toLocaleTimeString()}</StyledP>
            
        </StyledDiv>
    )
}

export default DateTime

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;

`;

const StyledP = styled.p`
    margin: 0 10px;
    font-weight: bolder;
    font-style: italic;
`;