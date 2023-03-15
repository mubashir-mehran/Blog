import { handleSubmit } from "@/src/utils/form";
import React from "react";
import { useState } from "react";
import Image from 'next/image'



export default function Createblogs() {
  
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "image") {
      setImage(e.target.value);
    } else if (e.target.name == "title") {
      setTitle(e.target.value);
    }else if (e.target.name == "description") {
      setDescription(e.target.value);
    }
  };
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const data = { image, name, title, description };
    let res = await fetch("/api/createblogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);
    setName("");
    setImage("");
    setTitle("");
    setDescription("");
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem"
      }}
    >
      <form
        onSubmit={handleSubmit}
        method="POST"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40rem",
          height: "39rem",
          gap: "15px",
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
          CREATE YOUR BLOG
        </h4>
        <label
          style={{
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
          for="fname"
        >
          Put Your Blog's Image:
        </label>
        <input
          style={{
            padding: "15px",
            border: "1px solid gray",
            borderRadius: "5px",
            boxShadow: "1px 1px 3px lightgrey",
          }}
          onChange={handleChange}
          id='image'
          name="image"
          value={image}
          type="text"
          placeholder="Image URL..."
          required
        />
         <label
          style={{
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
          for="fname"
        >
          Author's Name:
        </label>
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
          value={name}
          type="text"
          placeholder="Enter Author's Name..."
          required
        />
        <label
          style={{
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
          for="fname"
        >
          Blog's Title:
        </label>
        <input
          style={{
            padding: "15px",
            border: "1px solid gray",
            borderRadius: "5px",
            boxShadow: "1px 1px 3px lightgrey",
          }}
          onChange={handleChange}
          id='title'
          name="title"
          value={title}
          type="text"
          placeholder="Enter your Title..."
          required
        />

        <label
          style={{
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
          for="fname"
        >
          Blog's Description:
        </label>
        <textarea
          style={{
            padding: "15px",
            border: "1px solid gray",
            borderRadius: "5px",
            boxShadow: "1px 1px 3px lightgrey",
          }}
          onChange={handleChange}
          rows="4"
          cols="50"
          name="description"
          form="userform"
          id="description"
          value={description}
          placeholder="Enter Blog's Description..."
          required
        ></textarea>
        <input
          style={{
            border: "1px solid gray",
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
          value={"CREATE"}
        />
      </form>
    </div>
  );
}
