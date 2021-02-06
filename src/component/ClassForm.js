import React from 'react'
import styled from 'styled-components'

function ClassForm(){

const initialClassForm ={
        name: '',
        instructor: '',
        classType: '',
        startTime: '',
        duration: '',
        intensity: '',
        location: '',
        attendees: '',
        maxClass: '',
        instructorComments: ''
    }


    return(
        <div>
            <StyledForm>
                <label>Name of Class</label>
                <input 
                    type='text' 
                    name='name'
                    placeholder='Enter Name of the Class'
                />

                <label>Your Name</label>
                <input 
                    type='text'
                    name='instructor'
                    placeholder='Your Name'
                />

                <label>Type of Class</label>
                <input 
                    type='text'
                    name='classType'
                    placeholder='Enter Class Type ex. cardio, calisthenics, etc.'
                />

                <label>Start Time and Date</label>
                <input 
                    type='text'
                    name='startTime'
                    placeholder='Enter Start Time and Date'
                />

                <label>Intensity</label>
                <input 
                    type='text'
                    name='intensity'
                    placeholder='Enter intensity level of class.'
                />

                <label>Location</label>
                <input 
                    type='text'
                    name='location'
                    placeholder='Enter the Location'
                />

                
                <label>Max Class</label>
                <input 
                    type='text'
                    name='maxClass'
                    placeholder='Enter Maximum Class Size'
                />

                <p>Number of Attendees:</p>

                <label>Comments</label>
                <textarea 
                    name='instructorComments'
                    placeholder='Enter Detailed Comments about the Class'
                    
                />

                <Button>Add Class</Button>
            </StyledForm>
        </div>
    )
}

export default ClassForm

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 50vh;
    margin 20px auto;
    text-align: left;

`;

const Button = styled.button`
padding: 15px 50px;
border-radius: 12px;
border: solid 2px white;
font-size: 1.2rem;
font-weight: bolder;
background: #7b6f9f;
color: white;
margin: 20px auto

`;