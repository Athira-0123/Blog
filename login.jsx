import "./login.css"
// import img from ''
<login />

export default function Login() {
    return(
        <div className="login">
             <form className="loginForm">
           <span className="loginTitle">LOGIN</span>
          
               <label>Email</label>
               <input type="text " className="loginInput"  placeholder="Enter you email"/>
               <label>Password</label>
               <input type="password" className="loginInput"placeholder="Enter your passwor"/>
               <button className="loginButton">Login</button>             
               </form> 
               <button className="loginRegisterButton">Register</button>
               

            </div>
            
           
    );
}


