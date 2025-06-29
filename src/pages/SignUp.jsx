import NavBar from "../components/NavBar/NavBar";
import SignHero from "../components/SignHero/SignHero";

const SignUp = () => {
  const FormContent = [
    {
      type: "text",
      placeholder: "Enter your username",
    },
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
        heading={"Sign Up"}
        contentHead={"Enter your email and username , password to sign up!"}
        content={"Have an account? "}
        contentBtn={"SignUp"}
        href={"/signin"}
        target={"Sign In"}
        FormContent={FormContent}
      />
    </>
  );
};

export default SignUp;
