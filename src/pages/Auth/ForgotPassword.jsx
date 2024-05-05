import "./auth_Styles.css"
import CustomInput from "../../components/CustomInput";

const ForgotPassword = () => {
  return (
    <div>
      <div className="forgotPassword-wrapper">
        <div className="conatiner-xxl">
          <div className="fp-card">
            <h3 className="title text-center fw-bold pb-2">
              Update your password
            </h3>
            <p className="text-center mb-3">
              Please enter the email you registered with, we will send you a
              link to reset your password.
            </p>
            <form action="">
              <div className="mb-4">
                <CustomInput type="text" name="email" placeholder="Email" />
              </div>
              <button type="submit" className="button-login">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
