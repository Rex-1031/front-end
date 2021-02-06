import React from 'react';
import styled from 'styled-components';
import DateTime from './DateTime';


function User(){


    return(
    <MainContent>
            <div>
                <UserSection>
					<div>
                        <GreetingSection>
						<h2>Welcome User</h2>
                        <DateTime></DateTime>
                        </GreetingSection>
						<p>
                            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.
                        </p>
					</div>
				</UserSection>
			</div>
        </MainContent>
    )
}
    



export default User

const MainContent = styled.div`
    text-align: justify;
    line-height: 1.5;
    height: 75vh;

`;

const UserSection =styled.section`
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 25px;
    height: 25vh;
    border-top: solid 1px white;

`;

const GreetingSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

