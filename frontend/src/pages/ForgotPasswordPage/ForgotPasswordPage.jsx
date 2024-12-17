import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useDispatch } from "react-redux";
import { UpdateEmail } from "../../redux/authSlice";
const ForgotPasswordPage = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // this is the use when we use axios to connect backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/account/forgot-password", {
        email,
      });
      console.log("Resetpassword code has been sent:", response.data);
      dispatch(UpdateEmail(email));
      navigate("/reset-password-verification");
    } catch (error) {
      if (error.response) {
        console.error("Password reset failed:", error.response.data);
      } else {
        console.error("Password reset failed:", error.message);
      }
    }
  };

  return (
    <div className="max-w-xl w-full mx-auto mt-12 text-left"> {/* Increased width and aligned text left */}
      <h1 className="text-3xl font-bold mb-6">{t("Quên mật khẩu")}</h1> {/* Adjusted size for better prominence */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {t("Email")}
          </label>
        </div>

        <ButtonComponent
          padding={3}
          text={t("Gửi mã đặt lại mật khẩu")}
          hover={true}
          bold={true}
          fullScreen={true}
          height={"h-12"}
          onClick={handleSubmit}
        />
      </form>
    </div>

  );
};

export default ForgotPasswordPage;
