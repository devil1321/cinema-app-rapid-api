import React,{useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
const SignUp = () => {
    const history = useHistory()
    const [isFailed,setIsFailed] = useState(false)
    const [formData,setFormData] = useState({
        email:'',
        password:'',
        passwoed_2:'',
        age:'',
        plan:''
    })
    const handleChange = (e) =>{
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const user = {
            email:formData.email,
            password:formData.password,
            age:formData.age,
            plan:formData.plan
        }
        if(formData.password === formData.password_2){
            axios.post('http://localhost:4000/users',user)
                .then(res => history.push('/profile'))
                .catch(err => {console.log(err)})
        }else{
            setIsFailed(true)
            setTimeout(()=>{
                setIsFailed(false)
            },8000)
        }
    }
    return (
        <div className="sign-up">
            <div className="sign-up__form-wrapper">
            <h1>Sign Up</h1>
            {isFailed && <h2>Form has errors</h2>}
                <form action="" onSubmit={(e)=>{handleSubmit(e)}}>
                    <div className="sign-up__field">
                        <label htmlFor="">Login:</label>
                        <input type="text" name="login" required onChange={(e)=>{handleChange(e)}}/>
                    </div>
                    <div className="sign-up__field">
                        <label htmlFor="">Email:</label>
                        <input type="email" name="email" required onChange={(e)=>{handleChange(e)}}/>
                    </div>
                    <div className="sign-up__field">
                        <label htmlFor="">Password:</label>
                        <input type="password" name="password" required onChange={(e)=>{handleChange(e)}}/>
                    </div>
                    <div className="sign-up__field">
                        <label htmlFor="">Confirm Password:</label>
                        <input type="password" name="password_2" required onChange={(e)=>{handleChange(e)}}/>
                    </div>
                    <div className="sign-up__field">
                        <label htmlFor="">Age:</label>
                        <input type="text" name="age" required onChange={(e)=>{handleChange(e)}}/>
                    </div>
                    <div className="sign-up__radio-group">
                        <div className="sign-up__radio">
                            <input type="radio" name="plan" id="" value="Full Time"  required onChange={(e)=>{handleChange(e)}}/>
                            <label htmlFor="">Full Time</label>
                        </div>
                        <div className="sign-up__radio">
                            <input type="radio" name="plan" id="" value="Part Time" required onChange={(e)=>{handleChange(e)}}/>
                            <label htmlFor="">Part Time</label>
                        </div>
                        <div className="sign-up__radio">
                            <input type="radio" name="plan" id="" value="One Month" required onChange={(e)=>{handleChange(e)}}/>
                            <label htmlFor="">One Month</label>
                        </div>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
