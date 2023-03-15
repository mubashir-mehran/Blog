import Seacrh from "@/src/components/search";
import Button from "@/src/components/search/button";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 30px",
          height: "60px",
          boxShadow: "1px 1px 3px lightgrey",
        }}
      >
        <Link
          href={"/"}
          style={{
            fontSize: "24px",
            letterSpacing: "2px",
            textDecoration: "none",
            color: "black",
            fontWeight: "bold",
          }}
        >
          BLOG APP
        </Link>
        <Seacrh />
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        
        >
        
          <Button handleClick={""} text={"SIGN-UP"} to={"/signup"} />
          <Button handleClick={""} text={"SIGN-IN"} to={"/signin"} />
          <Button handleClick={""} text={"CREATE-BLOGS"} to={"/createblogs"} />
        </div>
      </nav>
      <section>{children}</section>
    </div>
  );
}
