import "./register.css"
export default function Register() {
    return(
        <div className="register">
            <span className="registerTitle">REGISTER</span>
            <form className="registerform">
            <label >Username</label>
                <input type="text" className="loginInput" placeholder="Enter username"/>
                <br/>
                <br/>
                <label >Email</label>
                <input type="text" className="loginInput" placeholder="Enter your email"/>
                <br/>
                <label>Password</label>
                <input type="Password" className="loginInput" placeholder="Enter your Password"/>
                <button className="registerButton">Register</button>
             

            </form>
         
            <button className="registerLoginbutton">Login</button>
        </div>
    );
}
