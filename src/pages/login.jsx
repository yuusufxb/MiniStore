import { forwardRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  // enter keydown  
  const handleEnter = (event) => {
  if (event.key === "Enter") {
    formSubmit(event);  // call login function
  }
};
    // users that i can login to my website
    const users = {
        "users":[{
            "username":"youssef",
            "password":"1234"
            },
            {
            "username":"name", //type your name if you want to
            "password":"pass"  //also any password to acces into the home page
            }
        ]
    };

    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [error,seterror]=useState(false);
  let val = 0 ;  
  const nav = useNavigate();
  const formSubmit = (e) => {
  e.preventDefault();
    // some() return true or false so the code can be more cleaner
  const userExists = users.users.some(
    (el) => el.username === username.trim() && el.password === password.trim()
  );

  if (userExists) {
    nav("/home"); // this nav takes you immediatly to the /home url when the formsubmit up here is called
  } else {
    seterror(true);
  }
};

  return (
    // some bootstrap stuf here 
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Welcome to MiniStore</h3>
        {error && <p className="alert alert-danger text-center" role="alert">username or password is incorrect!</p>}
        <form onSubmit={formSubmit}>   
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              onKeyDown={handleEnter}
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter username"
              value={username}
              onChange={(x)=>setusername(x.target.value)} // update username state whenever you write a thing 
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              onKeyDown={handleEnter}
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e)=>setpassword(e.target.value)} // update password state whenever ....
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
