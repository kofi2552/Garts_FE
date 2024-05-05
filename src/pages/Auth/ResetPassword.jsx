import CustomInput from "../../components/CustomInput";
import "./auth_Styles.css"

const ResetPassword = () => {
  return (
    <div>
      <div className="forgotPassword-wrapper">
        <div className="conatiner-xxl">
          <div className="fp-card">
            <h3 className="title text-center fw-bold pb-2">
              Update your Password
            </h3>
            <p className="text-center mb-3">
              Please enter your password, confirm it and click submit to update
              your password.
            </p>
            <form action="">
              <div className="mb-3">
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="mb-4">
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Confirm Password"
                />
              </div>
              <button type="submit" className="button-login">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
