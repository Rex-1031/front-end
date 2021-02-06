import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';



function Login(){
    return(
        <ContentDiv>
            
            <StyledForm>
                <label htmlFor='name'/>
                    <StyledInput name='name' placeholder='Name or User Name' />

                <label htmlFor='userChoice'></label>
                <StyledSelect name='userChoice'>
                    <option>Account Type</option>
                    <option>Instructor</option>
                    <option>Client</option>
                </StyledSelect>

                <label name='instCode' />
                <StyledInput htmlFor='instCode' type='password' placeholder='Instructor Code' />

                <label htmlFor='password'/>
                <StyledInput name='password' type='password' placeholder='Password' />
                <Button to={'/User'}>Login</Button>
            </StyledForm>

            <MessageDiv>
                <h1>Login</h1>
                <p><stong><em>Please Log In to Continue</em></stong></p>
            </MessageDiv>
        </ContentDiv>
    )
}

export default Login

const ContentDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 15% auto;
    background: rgba(12, 14, 28, 0.9);
    height: 75vh;
    width: 90vw;
    box-shadow: 1px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: solid 2px white;
    padding 50px;
    width: 50vw;
`;

const MessageDiv =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    width 50vw;
`;

const StyledInput = styled.input`
    margin-bottom: 20px;
    width: 50%;
    padding: 10px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bolder;
`;

const StyledSelect = styled.select`
    margin-bottom: 20px;
    width: 55%;
    padding: 10px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bolder;
    
`;

const Button = styled(Link)`
    padding: 15px 50px;
    border-radius: 12px;
    border: solid 2px white;
    font-size: 1.2rem;
    font-weight: bolder;
    background: #242943;
    color: white;
`;