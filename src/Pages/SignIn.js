import React,{useState,useContext,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { DataContext } from '../api/context';
import axios from 'axios'
import Footer from '../Components/Footer'

const SignIn = () => {
    const { setIsLogged, user, setUser, setIsAuthenticated } = useContext(DataContext)
    const [isNotPass,setIsNotPass ] = useState(false)
    const history = useHistory()
    const [formData,setFormData] = useState({
        emailLogin:'',
        password:''
    })

   

    const handleChange = (e) =>{
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.get('http://localhost:4000/users/', {params:{ 
            login:formData.emailLogin
        }})
            .then(res => {
                if(res.data[0].password = formData.password){
                    setUser(res.data[0])
                    setIsAuthenticated(true)
                    history.push('/home')
                }else{
                    setIsNotPass(false)
                }
            })
            .catch(err => console.log(err))
        axios.get('http://localhost:4000/users/', {params:{ 
            email:formData.emailLogin
        }})
            .then(res => {
                if(res.data[0].password = formData.password){
                    setUser(res.data[0])
                    setIsAuthenticated(true)
                    history.push('/home')
                }else{
                    setIsNotPass(false)
                }
            })
            .catch(err => console.log(err))
    }

    useEffect(()=>{

    },[user])

    return (
        <div className="sign-in">
            <div className="sign-in__content">
            <h1 className="sign-in__title">Log In</h1>
                <div className="sign-in__form-wrapper">
                    <div className="sign-in__form-logo">
                        <button>Sign</button>
                    </div>
                    {isNotPass && <div className="sing-in__alert">
                                        Wrong User Data
                                  </div>}
                    <form action="" onSubmit={(e)=>{handleSubmit(e)}}>
                        <div className="sign-in__form-field">
                            <label htmlFor="">Email:</label>
                            <input type="text" name="emailLogin" onChange = {(e)=>{handleChange(e)}}/>
                        </div>
                        <div className="sign-in__form-field">
                            <label htmlFor="">Password:</label>
                            <input type="password" name="password" onChange = {(e)=>{handleChange(e)}}/>
                        </div>
                        <div className="sign-in__buttons-group">
                            <button type="submit">LogIn</button>
                            <Link to="/sign-up"><button>Register</button></Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SignIn
