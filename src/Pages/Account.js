import React,{useState,useEffect} from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
const Account = () => {
    const [isOpen,setIsOpen] = useState(false)
    return (
        <div className="account">
            <Nav />
            <div className="account__content">
                <h1>Peter Jacksons</h1>
                <div className="account__data">
                <img src="/assets/profile.png" alt="" />
                    <form action="">
                        <div className="account__field">
                            <div className="account__input-field">
                                <label htmlFor="">Name:</label>
                                <input type="text" value={"Peter"} />
                            </div>
                            <div className="account__input-field">
                                <label htmlFor="">Surname:</label>
                                <input type="text" value={"Jacksons"} />
                            </div>
                        </div>
                        <div className="account__field">
                            <div className="account__input-field">
                                <label htmlFor="">Age:</label>
                                <input type="text" value={23} />
                            </div>
                            <div className="account__input-field">
                                <label htmlFor="">Gender:</label>
                                <input type="text" value={"Male"} />
                            </div>
                        </div>
                        <div className="account__field">
                            <div className="account__input-field">
                                <label htmlFor="">Country:</label>
                                <input type="text" value={"USA"} />
                            </div>
                            <div className="account__input-field">
                                <label htmlFor="">Billing Date:</label>
                                <input type="text" value={"2021/11/12"} />
                            </div>
                        </div>
                        <div className="account__field">
                            <div className="account__input-field options close" >
                                <label htmlFor="">Plan:</label>
                                <input type="text" value={"Full Time"} onClick={()=>{setIsOpen(!isOpen)}} />
                                {isOpen && <div className="account__plan-options">
                                    <div className="account__plan-option">Full Time</div>
                                    <div className="account__plan-option">Part Time</div>
                                    <div className="account__plan-option">One Month</div>
                                </div>}
                            </div>
                            <div className="account__input-field">
                                <label htmlFor="">Account State:</label>
                                <input type="text" value={"Active"} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Account
