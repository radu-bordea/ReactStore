import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shaddow-lg flex flex-col gap-y-4"
      ></Form>
    </section>
  );
};
export default Register;
