import { useState } from 'react';
import './App.css'
import './index.css'


export default function Login() {

	// States for registration
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// States for checking the errors
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
    const Regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/

     const handleEmail=(e)=>{
        let em = e.target.value;
        if(!em.match(Regex)){
            setEmailError(true);
        }
        else{
            setEmailError(false);
        }
        setEmail(em);
     }

     const handlePassword=(e)=>{
        let pass = e.target.value;
        if(pass.length<4){
            setPasswordError(true);
        }
        else{
            setPasswordError(false);
        }
        setPassword(pass);
     }

     const handleSubmit=(e)=>{
        e.preventDefault();
        let em = e.target[0].value;
        if(!em.match(Regex)){
            setEmailError(true);
        }
        else{
            setEmailError(false);
        }

        let pass = e.target[1].value;
        if(pass.length<4){
            setPasswordError(true);
        }
        else{
            setPasswordError(false);
        }

        setEmail('');
        setPassword('');

        if((em.match(Regex))&& (!pass.length<4)){
            alert('Form has been Submitted');
            alert('Email = '+em  + ' Password = '+pass);
        }
      }


return (
    <div className='container'>
    <h1>Login Form</h1>
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
    <div className='input-name'>
        <label htmlFor='' className='name'> Email </label><br/>
        <input type='text' name='email' onChange={handleEmail} value={email} className='text-name'/>
        <br/>
        {emailError ? <span style={{color:'red'}}>
           You will use characters,numbers and symbols
        </span>:'' }
        </div>

        <div className='input-name'>
        <label htmlFor=''className='name'> Password </label><br/>
        <input type='text' name='password' onChange={handlePassword} value={password} className='text-name'/>
        <br/>
        {passwordError ? <span style={{color:'red'}}>
        Name length must be greater then 4 characters
        </span>:'' }
     </div>

        <div className='input-name'>
        <button type='submit'className='button'>Login</button>
        </div>

    </form>
    </div>
    </div>
)
}