import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';




function HomePage(){
    return(
        <MainContent>
            <div>
                <IntroSection>
					<div>
						<h2>Anywhere Fitness</h2>
						<p>
                            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.
                        </p>
					</div>
				</IntroSection>

				
					<SectionOne>
							<div>
								<h3>Clients</h3>
								<p>
                                    Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.
                                </p>
							</div>
					</SectionOne>

                    <SectionTwo>
							<div>
								<h3>Instructors</h3>
								<p>
                                    Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.
                                </p>
							</div>
					</SectionTwo>

                    <SectionThree>
							<div>
								<h3>Classes</h3>
								<p>
                                    Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.
                                </p>
							</div>
                            <ButtonDiv>
                                <Button to='/signup'>Sign Up</Button>
                                <Button to='/login'>Login</Button>
                            </ButtonDiv>
					</SectionThree>
                            
			</div>
        </MainContent>
    )
}

export default HomePage


const MainContent = styled.div`
    text-align: justify;
    line-height: 1.5;

`;

const IntroSection =styled.section`
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 25px;
    height: 25vh;
    border-top: solid 1px white;

`;

const SectionOne = styled.section`
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 25px;
    height: 25vh;
    background: rgba(12, 14, 28, 0.9);
    border-top: solid 1px white;
`;

const SectionTwo = styled.section`
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 25px;
    height: 25vh;
    border-top: solid 1px white;
`;

const SectionThree = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 25px;
    height: 25vh;
    background: rgba(12, 14, 28, 0.9);
    border-top: solid 1px white;
    margin: 0;
`;

const Button = styled(Link)`
    padding: 10px 25px;
    border-radius: 12px;
    background: #242943;
    border: solid 1px white;
    margin: 20px;
`;

const ButtonDiv = styled.div`
    margin: 125px auto 0 auto;

`;
