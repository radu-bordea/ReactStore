import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

// Action function to handle form submission
export const action = async ({ request }) => {
  // Extract and convert form data to an object
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    // Attempt to create a new account
    const response = await customFetch.post("/auth/local/register", data);
    // Display success message and redirect to login page
    toast.success("account created successfully");
    return redirect("/login");
  } catch (error) {
    // Extract and display error message
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";
    toast.error(errorMessage);
    return null;
  }
};

// Register component rendering the registration form
const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shaddow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput
          type="text"
          label="username"
          name="username"
        />
        <FormInput
          type="email"
          label="email"
          name="email"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
        />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <p className="text-center">
          Already a member?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
