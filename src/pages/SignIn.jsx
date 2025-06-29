import SignHero from "../components/SignHero/SignHero";

const SignIn = () => {
  const FormContent = [
    {
      type: "email",
      placeholder: "Enter your Email",
    },
    {
      type: "password",
      placeholder: "Enter your Password",
    },
  ];
  return (
    <>
      <SignHero
        heading={"Sign In"}
        contentHead={" Enter your email and password to sign in !"}
        content={"Don't have an account? "}
        contentBtn={"SignIn"}
        href={"/signup"}
        target={"Sign Up"}
        FormContent={FormContent}
      />
    </>
  );
};

export default SignIn;
