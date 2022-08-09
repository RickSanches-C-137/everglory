import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { requestClient } from "../../utils/request-client";
import Navbar from "../layout/Navbar";
import "antd/dist/antd.css";
import { message } from "antd";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        email,
        password,
        passwordVerify,
      };

      await requestClient.post("/auth", registerData);

      await getLoggedIn();
      message.success("Sign up successful");
      history.push("/");
    } catch (err) {
      console.error(err);
      message.error("An error occured!");
    }
  }

  return (
    <div>
      <Navbar />
      <div className="grid md:grid-cols-4">
        <section className="md:col-span-2 bg-white md:mx-10 -mt-5 md:mt-20 my-20 md:ml-28">
          <div className="text-center p-5 md:mt-5">
            <h1 className="font-bold text-3xl md:hidden">Prime Investors</h1>
            <h1 className="font-bold text-3xl">Finally!!!</h1>
            <h2 className="text-gray-600 text-2xl">Welcome aboard</h2>
          </div>
          <form onSubmit={register} className="md:ml-10 ml-8 w-full mt-5">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="example@example.com"
              className="border-l-4 border-gray-700 w-4/5 rounded-md shadow-md p-2 mt-1 mb-3"
            />
            <br />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="border-l-4 border-gray-700 w-4/5 rounded-md shadow-md p-2 mt-1 mb-3"
            />
            <br />

            <input
              value={passwordVerify}
              onChange={(e) => setPasswordVerify(e.target.value)}
              type="password"
              placeholder="Verify Password"
              className="border-l-4 border-gray-700 w-4/5 rounded-md shadow-md p-2 mt-1 mb-3"
            />
            <br />
            <input
              type="submit"
              value="Signup"
              className="p-2 mt-4 ml-16 rounded-sm w-2/5 cursor-pointer text-white bg-blue-500 opacity-75"
            />
          </form>
          <p className="p-2 text-gray-700 md:ml-text text-center">
            Already have an account?{" "}
            <Link to="/login" className="font-bold">
              Login
            </Link>
          </p>
        </section>
        <section className="md:col-span-2 hidden md:block -ml-14 mr-8">
          <img
            src={require("../../images/reg.png").default}
            alt="Reg"
            className="hidden md:block"
          />
        </section>
      </div>
     
    </div>
  );
}

export default Register;
