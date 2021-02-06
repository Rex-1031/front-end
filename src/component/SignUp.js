import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


function SignUp(){

    const initalSignUp ={
        accountType: '',
        name: '',
        userName: '',
        email: '',
        password: '',
        instrutorCode: '',
    }

    const [signUp, setSignUp] = useState(initalSignUp);
    const [post,setPost] = useState([]);
    const [severError, setServerError] = useState("");

    const inputChange = (e)=>{
        const newSignUpData ={
            ...signUp, 
            [e.target.name]: e.target.value
        }
        setSignUp(newSignUpData)
    }

    const formSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted!')

        axios
        .post ("https://reqres.in/api/users", signUp)
        .then((res) =>{
            setPost(res.data)
            setSignUp(initalSignUp);
            setServerError(null);

        })
        .catch((err) =>{
            setServerError("Server Error")
        })
    }
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

        
            
            <StyledForm onSubmit={formSubmit}>
                <Label htmlFor='accountType'>Account Type</Label>
                <Select 
                    name='accountType' 
                    data-cy='formType' 
                    value={signUp.formType} 
                    onChange={inputChange}>

                    <option value=''>Choose One</option>
                    <option value='instructor'>Instructor</option>
                    <option value='client'>Client</option>

                </Select>

                <Label htmlFor='name'>Name</Label>
                <Input 
                    name ='name' 
                    type='text' 
                    data-cy='name' 
                    value={signUp.name} 
                    onChange={inputChange} 
                    placeholder='Enter your full name'
                />

                <Label htmlFor='userName'>Username</Label>
                <Input
                    name='userName'
                    type='text'
                    data-cy='userName'
                    value={signUp.userName}
                    onChange={inputChange}
                    placeholder='Create a username' 
                />

                <Label htmlFor='email'>Email</Label>
                <Input 
                    type='email'
                    name='email'
                    data-cy='userName'
                    value={signUp.email}
                    onChange={inputChange}
                    placeholder='Enter your email' 
                />
                

                <Label htmlFor='password'>Password</Label>
                <Input 
                    type='password'
                    name='password'
                    data-cy='password'
                    value={signUp.password}
                    onChange={inputChange}
                    placeholder='Create a Password' 
                />

                <Label htmlFor='instructorCode'>Instructor Code</Label>
                <Input
                    name='instructorCode'
                    type='password'
                    data-cy='instructorCode'
                    value={signUp.instructorCode}
                    onChange={inputChange}
                    placeholder='Create an Instructor Code'
                />

                <ButtonDiv>
                    <Button>Submit</Button>
                </ButtonDiv>

                <pre>{JSON.stringify(post,null,2)}</pre>    

            </StyledForm>
        </ContentDiv>
    )
}


export default SignUp

const ContentDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 20% auto;
    height: 90vh;
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
    background: #7b6f9f;
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

