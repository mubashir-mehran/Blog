import React from "react";
import Read from '@/styles/Read.module.css'
// import { text } from 'stream/consumers'

export default function Readmore({blog}) {
  console.log(blog)
  return (
    <div>

        <div
        style={{
          border: "1px solid lightgray",
          width: "50%",
          height: "38rem",
          padding: "20px",
          margin: "30px 0 0 60px",
          boxShadow: "1px 1px 5px gray",
        }}
      >
        <h3
          style={{
            fontSize: "40px",
            letterSpacing: "2px",
          }}
        >
          {blog.name}
         
        </h3>
        <p style={{padding: '10px'}}> 
              {blog.description}
              
        </p>
      </div>

      <div className={Read.container}>
        <div className={Read.content}>
          <h1 className={Read.heading1}>Author Name</h1>
          <h3 className={Read.heading3}>
            Email ID
          </h3>
          <button style={{
            border: "1px solid gray",
            background: "orange",
            color: "white",
            width: "7rem",
            padding: "10px",
            border: "1px solid orange",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: '1rem',
            fontFamily: 'inherit', 
            letterSpacing: "5px",
            cursor:'pointer'

          }}>Like</button>
        </div>
        <div class={Read.flap}></div>
      </div>
    </div>
  );
}

export async function getServerSideProps({params:{id}}) {
  const res = await fetch(`http://localhost:3000/api/${id}`)
  const data = await res.json()
  return {
    props: {blog:data}
  }
}
