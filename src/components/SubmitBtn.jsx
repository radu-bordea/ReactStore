import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  // Retrieve navigation state using the useNavigation hook
  const navigation = useNavigation();
  
  // Determine if the form is currently submitting based on navigation state
  const isSubmitting = navigation.state === "submitting";

  return (
    // Render a button element with the following properties
    <button
      type="submit"
      className="btn btn-primary btn-block"
      // Disable the button if the form is currently submitting
      disabled={isSubmitting}
    >
      {/* Display either a loading indicator and "sending..." text if submitting,
          or the provided text or default "submit" text */}
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner"></span>
          sending...
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
};

export default SubmitBtn;
