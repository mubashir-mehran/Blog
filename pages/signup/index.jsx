import { handleSubmit } from "@/src/utils/form";
import Link from "next/link";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, password };
    let res = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);
    setName("");
    setEmail("");
    setPassword("");
    toast.success('Your Account has been created !', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "8rem",
        margin: "10px",
      }}
    >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        method="POST"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30rem",
          height: "23rem",
          gap: "25px",
          border: "1px solid white",
          borderRadius: "5px",
          padding: "15px",
          boxShadow: "1px 1px 3px black",
        }}
      >
        <h4
          style={{
            textAlign: "center",
            color: "darkblue",
            fontWeight: "bolder",
            fontSize: "25px",
            fontFamily: "revert-layer",
            letterSpacing: "2px",
          }}
        >
          SIGN-UP FORM
        </h4>
        <input
          style={{
            padding: "15px",
            border: "1px solid gray",
            borderRadius: "5px",
            boxShadow: "1px 1px 3px lightgrey",
          }}
          onChange={handleChange}
          id="name"
          name="name"
          type="text"
          value={name}
          placeholder="Enter your name"
          required
        />
        <input
          style={{
            padding: "15px",
            border: "1px solid gray",
            borderRadius: "5px",
            boxShadow: "1px 1px 3px lightgrey",
          }}
          onChange={handleChange}
          id="email"
          name="email"
          type="email"
          value={email}
          placeholder="Enter your email"
          autoComplete="email"
          required
        />
        <input
          style={{
            padding: "15px",
            border: "1px solid gray",
            borderRadius: "5px",
            boxShadow: "1px 1px 3px lightgrey",
          }}
          onChange={handleChange}
          id="password"
          name="password"
          type="password"
          value={password}
          autoComplete="current-password"
          placeholder="Enter your password"
          required
        />
        <span style={{display:'flex',justifyContent:'space-between'}}>
        <input
          style={{
            background: "orange",
            color: "white",
            width: "6rem",
            padding: "10px",
            border: "1px solid orange",
            borderRadius: "5px",
            fontWeight: "bold",
            fontFamily: "inherit",
            letterSpacing: "1px",
            cursor: "pointer",
          }}
          type="submit"
          value={"SIGN-UP"}
        />
        <p style={{textAlign:'right', letterSpacing:'1px'}}>Already a user?<Link href={'/signin'}>LOGIN</Link></p>
        </span>
      </form>
    </div>
  );
}
