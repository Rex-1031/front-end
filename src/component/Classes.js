import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function Classes (props){
    console.log(props);
    return(
        <ContentDiv>
            <Heading>
                <h1>Classes</h1>

                <div>
                    <label> 
                        <input
                            type='text'
                            placeholder='Search Classes'
                        />
                    </label>

                    <button>Search</button>
                </div>
                <FormLink to='/classForm'>Add a Class</FormLink>
            </Heading>

            <CardsDiv>
                {props.sessions.map(session =>(
                    <Link to ={`/classCard/${session.id}`}>
                        <ContainerDiv key={session.id}>
                            <h3> {session.name} </h3>
                            <ClassInfo>
                                <p> <strong>Instructor:</strong> <em>{session.instructor}</em></p> 
                                <p> <strong>Workout Type:</strong> <em>{session.type}</em></p> 
                                <p> <strong>Date:</strong> <em>{session.startTime}</em> </p>
                                <p> <strong>Max Class Size:</strong> <em>{session.maxClassSize}</em> </p>
                                <p> <strong>Clients Enrolled:</strong> <em>{session.currentAttnNum}</em> </p>
                            </ClassInfo>
                        </ContainerDiv>

                    </Link>
                ))}
            </CardsDiv>
            
        </ContentDiv>
    )
}

export default Classes


const ContentDiv = styled.div`
    margin: auto;
    height: 75vh;
    

`;
const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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

const CardsDiv =styled.div`
    display: flex;
    justify-content: space-around;
`;


const ContainerDiv = styled.div`
    padding: 5px 10px;
    color: #f6f4f0;
    background-color: #7b6f9f;
    border-radius: 8px;
    box-shadow: 1px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    
`;



const ClassInfo = styled.div`
    text-align: left;
`;
