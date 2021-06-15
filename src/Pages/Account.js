import React,{useState,useEffect,useContext} from 'react'
import {DataContext} from '../api/context'
import axios from 'axios'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
const Account = () => {

    const [isOpen,setIsOpen] = useState(false)
    const [isUpdated,setIsUpdated] = useState(false)
    const { user, setUser } = useContext(DataContext)
    if(user){
        var {id, login, password, name, surname, age, gender, country, billingDate, plan, accountState, image } = user
    }

    const handleChange = (e) =>{
        setUser(prevState => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.put('http://localhost:4000/users/' + id, user)
            .then(res => {
                setIsUpdated(true)
                setTimeout(()=>{
                    setIsUpdated(false)
                },2000)
            })
            .catch(err => console.log(err))
    }

    const handleImage = (e) =>{
        let file = e.target.files[0]
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            const img = document.querySelector('.account__fake-field')
            img.src = event.target.result;
          });
          reader.readAsDataURL(file);
          const getDataUrl = (img) => {
            // Create canvas
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            // Set width and height
            canvas.width = img.width;
            canvas.height = img.height;
            // Draw the image
            ctx.drawImage(img, 0, 0);
            return canvas.toDataURL('image/jpeg');
         }
        const img = document.querySelector('.account__fake-field')
        img.addEventListener('load', function (event) {
            const dataUrl = getDataUrl(event.currentTarget);
            setUser(prevState => ({
                ...prevState,
                image:dataUrl
            }));
        });
    }

    const handlePlan = (e) =>{
        setUser(prevState =>({
            ...prevState,
            plan:e.target.innerHTML
        }))
        setIsOpen(false)
    }
    const handleDelete = (e) =>{
        axios.delete('http://localhost:4000/users/' + id)
            .then(res => console.log('deleted'))
            .catch(err => console.log(err))
    }
    useEffect(()=>{
        
    },[user])

    return (
        <div className="account">
            <Nav />
            <div className="account__content">
                <h1>{name} {surname}</h1>
                <div className="account__data">
                <div className="account__profile-image">
                    <img src={image} alt="" />
                    {isUpdated && <div className="account__alert correct">
                                        Profile Updated
                                    </div>}
                    <form action="" onSubmit={(e)=>{handleSubmit(e)}}>
                        <div className="account__image-upload">
                            <input onChange={(e)=>{handleImage(e)}} className="account__alert image" type="file" name="image" />
                            <button type="submit">Upload/Change</button>
                        </div>
                    </form>
                    <img src="" alt="" className="account__fake-field" />
                </div>
                    <form action="" onSubmit={(e)=>{handleSubmit(e)}}>
                        <div className="account__field">
                            <div className="account__input-field">
                                <label htmlFor="">Login:</label>
                                <input type="text" name="login" value={login} onChange = {(e)=>{handleChange(e)}}/>
                            </div>
                            <div className="account__input-field">
                                <label htmlFor="">Password:</label>
                                <input  name="password" type="password" value={password}  onChange = {(e)=>{handleChange(e)}}/>
                            </div>
                        </div>
                        <div className="account__field">
                            <div className="account__input-field">
                                <label htmlFor="">Name:</label>
                                <input type="text" name="name" value={name} onChange = {(e)=>{handleChange(e)}}/>
                            </div>
                            <div className="account__input-field">
                                <label htmlFor="">Surname:</label>
                                <input type="text" name="surname" value={surname}  onChange = {(e)=>{handleChange(e)}}/>
                            </div>
                        </div>
                        <div className="account__field">
                            <div className="account__input-field">
                                <label htmlFor="">Age:</label>
                                <input type="text" name="age" value={age}  onChange = {(e)=>{handleChange(e)}}/>
                            </div>
                            <div className="account__input-field">
                                <label htmlFor="">Gender:</label>
                                <input type="text" name="gender" value={gender}  onChange = {(e)=>{handleChange(e)}}/>
                            </div>
                        </div>
                        <div className="account__field">
                            <div className="account__input-field">
                                <label htmlFor="">Country:</label>
                                <input type="text" name="country" value={country} onChange = {(e)=>{handleChange(e)}} />
                            </div>
                            <div className="account__input-field">
                                <label htmlFor="">Billing Date:</label>
                                <input type="text" name="billingDate" value={billingDate}  onChange = {(e)=>{handleChange(e)}}/>
                            </div>
                        </div>
                        <div className="account__field select">
                            <div className="account__input-field options close" >
                                <label htmlFor="">Plan:</label>
                                <input className="account__plan" type="text" name="plan" value={plan} onClick={()=>{setIsOpen(!isOpen)}}  onChange = {(e)=>{handleChange(e)}}/>
                                {isOpen && <div className="account__plan-options">
                                    <div onClick={(e)=>{handlePlan(e)}} className="account__plan-option">Full Time</div>
                                    <div onClick={(e)=>{handlePlan(e)}} className="account__plan-option">Part Time</div>
                                    <div onClick={(e)=>{handlePlan(e)}} className="account__plan-option">One Month</div>
                                </div>}
                            </div>
                            <div className="account__input-field">
                                <label htmlFor="">Account State:</label>
                                <input type="text" name="accountState" value={accountState} onChange = {(e)=>{handleChange(e)}} />
                            </div>
                        </div>
                        <button>Update Personal Info</button>
                    </form>
                </div>
                <button className="delete" onClick={(e)=>{handleDelete()}}>Delete Account</button>
            </div>
            <Footer />
        </div>
    )
}

export default Account
