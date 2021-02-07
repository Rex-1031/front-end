import React from 'react';
import styled from 'styled-components';
import DateTime from './DateTime';


function User(){


    return(
        <MainContent>

            <GreetingSection>
	            <h2>Welcome User</h2>
                <DateTime></DateTime>
            </GreetingSection>
            <UserContent>
                <h2>Classes</h2>
                <h4>Signed Up</h4>
                <h4>Recently Viewed</h4>
            </UserContent>

        
        </MainContent>
    )
}
    



export default User

const MainContent = styled.div`
    text-align: justify;
    line-height: 1.5;
    height: 75vh;

`;

const UserContent =styled.div`
    padding: 30px;

`;

const GreetingSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding 0 20px;
    margin: 0 10px;
    border-bottom: solid 2px white;

`;

