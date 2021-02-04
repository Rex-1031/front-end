import React from 'react';
import { Link, Route } from 'react-router-dom';
import ClassCard from './ClassCard';
import ClassForm from './ClassForm';
import styled from 'styled-components'

function Classes (){

    return(
        <ContentDiv>
            <h1>Classes</h1>
            <label> 
                <input type='text'/>
            </label>
            <button>Search</button>
            <FormLink to='/classForm'>Add a Class</FormLink>
            <div>
                <Link path='/classCard' component={ClassCard} />
            </div>
            
        </ContentDiv>
    )
}

export default Classes


const ContentDiv = styled.div`
    
    margin: 50px; 

`;

const FormLink = styled(Link)`
    padding: 10px 25px;
    border-radius: 12px;
    background: #7b6f9f;
    border: solid 1px white;
    margin: 20px;
    color: white;
    font-weight: bolder;

`;