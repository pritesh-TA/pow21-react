import React, { useState, useEffect } from "react";
import axios from "axios";
import md5 from "md5";
const Test = () => {
  const [data, setData] = useState([]);
  const mydata = {
    email: "business.owner.test@business.com",
    password: "123456",
  };
  const API_KEY = "57289d1b6580bc64a58830e09031e745";
  const timestame = Math.round(new Date().getTime() / 1000);
  const user_token = md5(
    API_KEY +
      timestame +
      `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36
  `
  );
  console.log(user_token);

  const getData = async () => {
    const rowData = await axios
      // .post("https://www.app.pow21.com/api/userlogin", {
      .post("https://gorest.co.in/public/v2/users", {
        headers: {
          Authorization:
            "Bearer 4ff80986d69d8019dbd9ac96ec3d74695602c53e3c64ed9e25c9c0f55c9a8f5d",
          // "Content-Type": "application/json",
          // Accept: "application/json",
          // "Content-Length": 100,
          // "Cache-Control": "no-cache",
          // "Access-Control-Allow-Origin": "*",
          // "X-Authorization-Token": user_token,
          // "X-Authorization-Time": timestame.toString(),
        },
      })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {}, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelClick = () => {
    console.log("Email : ", email, "password : ", password);
    getData();
  };

  return (
    <>
      <div className="container mt-4 pt-4">
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            handelClick();
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Test;
