import Link from "next/link";

export default function SignUp() {
  return (
    <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        padding: '10px',
        margin:'10px',
    }}>
      <form onSubmit={'api/signup'}>
        <input placeholder="Enter your name" type="text" />
        <input placeholder="Enter your email" type="email" />
        <input placeholder="Enter your password" type="password" />
        <input style={{
         border: '1px solid gray',
         background: 'gray',
         height: '30px',
         width: "60px",
        }} type="submit" value={"signup"}/>
        <Link href={'api/signup'}>proceed</Link>
      </form>
    </div>
  );
}
