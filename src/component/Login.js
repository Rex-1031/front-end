import React from 'react'



function Login(){
    return(
        <div>
            <form>
                <label htmlFor='name'>Name</label>
                    <input name='name' />

                <label htmlFor='userChoice'>Are you?</label>
                <select name='userChoice'>
                    <option>--Please Choose--</option>
                    <option>An Instructor</option>
                    <option>A Client</option>
                </select>

                <label name='instCode' >Enter Your Instructor Code</label>
                <input htmlFor='instCode' type='password'/>
                <label htmlFor='password'>Password</label>
                <input name='password' type='password' />
                <button>Login</button>
                
            </form>
        </div>
    )
}

export default Login