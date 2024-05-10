// Import necessary modules from react-router-dom
import { useRouteError, Link } from "react-router-dom";

// Define the Error component
const Error = () => {
  // Retrieve error information using the useRouteError hook
  const error = useRouteError();
  console.log(error); // Log the error to the console for debugging purposes

  // Check if the error status is 404 (page not found)
  if (error.status === 404) {
    // Render a 404 error page
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            page not found
          </h1>
          <p className="mt-6 text-lg leading-7">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className="mt-10">
            {/* Provide a link to navigate back to the home page */}
            <Link to="/" className="btn btn-secondary">
              go back home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // If the error status is not 404, render a generic error message
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <h4 className="text-center font-bold text-4xl">there was an error</h4>
    </main>
  );
};

// Export the Error component as the default export
export default Error;
