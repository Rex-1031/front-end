import React from 'react';
import styled from 'styled-components';



    function ClassCard(){
        return(
            <div>
                <ContainerDiv>
                    <ClassHeader>
                    <h2>Class Name</h2>
                    <img alt='Image for Class'/>
                    </ClassHeader>
                    
                <ClassInfo>
                    <h4>Instructor Name</h4> {/*this will link to the instructors bio */}
                    <p>Type of Class</p>
                    <p>Duration</p>
                    <p>Intensity</p>
                    <p>Location</p>
                    <p>Max Class Size</p>
                    <p>Members registered for class</p>
                </ClassInfo>
                    <CardButton>Sign Up For Class</CardButton>
                </ContainerDiv>
            </div>
        )

    }

export default ClassCard 

const ContainerDiv = styled.div`
    border solid 2px black;
    padding: 10px;
    width: 20%;
    color: black;
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