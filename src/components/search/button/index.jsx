import Link from "next/link";

export default function Button({ handleClick, text, to }) {
  return (
    <Link
    href={to}
      style={{
        padding: "10px 15px",
        border:'none',
        borderRadius:'5px',
        background:'orange',
        color:'white',
        fontWeight:'bold',
        letterSpacing:'1px',
        cursor:'pointer',
        textDecoration:'none'
      }}
      onClick={handleClick}
    >
      {text}
    </Link>
  );
}
