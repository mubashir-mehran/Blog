export default function SignIn() {
  return (
    <div>
      <form onSubmit={"/api/..."}>
        <input placeholder="Enter your email" type="email" />
        <input placeholder="Enter your password" type="password" />
        <input type="submit" value={"Login"}></input>
      </form>
    </div>
  );
}
