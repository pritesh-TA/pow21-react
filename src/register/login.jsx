import React, { useState, useEffect } from "react";
import axios from "axios";
import md5 from "md5";

const Login = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const rowData = await axios("https://jsonplaceholder.typicode.com/users");
    // const rowData = await axios("https://www.app.pow21.com/api/userlogin");
    setData(rowData.data);
    // console.log(data);
    // console.log(rowData.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* <form
        className="nobottommargin"
        style={{
          maxWidth: "400px",
          backgroundColor: " rgba(255,255,255,0.93)",
          margin: "2rem auto",
        }}
      >
        <h3>Login to your POW Account</h3>
        <div className="col_full">
          <label htmlFor="login-form-username">Username:</label>
          <input
            type="text"
            id="login-form-username"
            name="email"
            value=""
            className="form-control not-dark"
          />
          <div>
            <div>Please provide your Email</div>
          </div>
        </div>
        <div className="col_full">
          <label htmlFor="login-form-password">Password:</label>
          <input
            type="password"
            id="login-form-password"
            name="password"
            value=""
            className="form-control not-dark"
          />
          <div>
            <div>Please provide your Password</div>
          </div>
        </div>
        <div className="col_full nobottommargin">
          <button
            className="button nomargin"
            id="login-form-submit"
            name="login-form-submit"
            value="login"
            type="submit"
          >
            Login
          </button>
          <a routerLink="/register" className="fright ml-3">
            |<span className="ml-3">Join Today</span>{" "}
          </a>
          <a routerLink="/forgotpassword" className="fright">
            Forgot Password?
          </a>
        </div>
      </form> */}

      {data.map((item) => {
        return <div>{item.name}</div>;
      })}
    </>
  );
};

export default Login;
