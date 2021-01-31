import React from 'react';
import styled from 'styled-components'


function SignUp(){
    return(
        <ContentDiv>
            <InstructionDiv>
                <h1>Sign Up</h1>
                <h3>Sign Up is easy, just follow these steps:</h3>
                <List> 
                    <li>Decide if you are creating a an Instructor or a Client Account.</li>
                    <li>Enter in your full name (spaces allowed).</li>
                    <li>Enter your email (We will keep it secret, promise!).
                    </li>
                    <li>Create a username and password.</li>
                    <li>Create an Instructor Code if making an instructor account.</li>
                </List>
            </InstructionDiv>

        
            
            <StyledForm>
                <Label>Account Type</Label>
                <Select>
                    <option>Choose One</option>
                    <option>Instructor</option>
                    <option>Client</option>
                </Select>

                <Label>Name</Label>
                <Input type='text' placeholder='Enter your full name' />

                <Label>Username</Label>
                <Input type='text' placeholder='Create a username' />

                <Label>Email</Label>
                <Input type='email' placeholder='Enter your email' />
                

                <Label>Password</Label>
                <Input type='password' placeholder='Create a Password' />

                <Label>Instructor Code</Label>
                <Input type='password' placeholder='Create an Instructor Code'/>

                <ButtonDiv>
                    <Button>Submit</Button>
                </ButtonDiv>
            </StyledForm>
        </ContentDiv>
       
    )
}


export default SignUp

const ContentDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 20% auto;
    height: 75vh;
    width: 90vw;
    background: rgba(12, 14, 28, 0.9); 
    box-shadow: 1px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-content: center;
    text-align: left;
    padding 50px;
    width: 50%;
`;

const Label = styled.label`
    font-size: 1.1rem;
    font-weight: bolder;
    margin-bottom: 5px;

`;

const InstructionDiv =styled.div`
    display: flex;
    flex-direction: column;
    align-content; center;
    justify-content: center;
    padding: 50px;
    width: 50%;
    text-align: center;
    border-right: solid 2px white;
`;

const Select = styled.select`
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 8px;
    font-size: 1rem;
`;

const Input = styled.input`
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 8px;
    font-size: 1rem;
`;

const Button = styled.button`
    padding: 15px 50px;
    border-radius: 12px;
    color: white;
    border: solid 2px white;
    font-size: 1.2rem;
    background: rgba(12, 14, 28, 0.9);
`;

const List = styled.ol`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    line-height: 2;
    text-align: justify;
`;

const ButtonDiv = styled.div`
    margin: 25px auto;
    

`;

