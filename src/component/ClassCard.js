import React from 'react';
import styled from 'styled-components';



    function ClassCard(props){
        


        
        return(
            <div>
                <ContainerDiv key={props.id}>
                    <ClassHeader>
                        <h2> {props.name}</h2>
                    </ClassHeader>
                    
                <ClassInfo>
                    <h4> {props.instructor}</h4> {/*this will link to the instructors bio */}
                    <p> {props.type} </p>
                    <p>{props.startTime} </p>
                    <p>{props.duration} </p>
                    <p> {props.intensityLevel} </p>
                    <p> {props.location} </p>
                    <p> {props.maxClassSize} </p>
                    <p> {props.currentAttnNum} </p>
                    <p> {props.instructorComments} </p>
                </ClassInfo>
                    <CardButton>Sign Up For Class</CardButton>
                </ContainerDiv>
            </div>
        )

    }

export default ClassCard 

const ContainerDiv = styled.div`
    border solid 2px #f6f4f0;
    padding: 10px;
    width: 20%;
    color: #f6f4f0;
    background-color: #7b6f9f;
    border-radius: 8px;
    
`;

const ClassHeader = styled.div`
`;

const ClassInfo = styled.div`
    text-align: left;
`;

const CardButton =styled.button`
    padding: 10px 15px;
    font-weight: bolder;
    border-radius: 12px;
`;