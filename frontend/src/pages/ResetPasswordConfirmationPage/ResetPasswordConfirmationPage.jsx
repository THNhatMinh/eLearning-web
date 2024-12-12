import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";

const ResetPasswordConfirmationPage = () => {
  const { t } = useTranslation();
  const [verificationCode, setVerificationCode] = useState("");
  const navigate = useNavigate();

  /* this is the use when we use axios to connect backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/reset-password-confirmation", {
        verificationCode,
        newPassword,
      });
      console.log("Password reset successful:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Password reset failed:", error.response.data);
    }
  };
  */

  const handleBackToLogin = () => {
    // this is the use when we don't use axios to connect backend
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle verification code submission logic here
    console.log("Verification code submitted:", verificationCode);
    // Redirect to login page after successful verification
    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto mt-12 text-center">
      <h1 className="text-2xl font-bold mb-4">{t("Đặt lại mật khẩu")}</h1>
      <p className="mb-6">
        {t("Một liên kết đặt lại mật khẩu đã được gửi đến email của bạn.")}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="verification_code"
            id="verification_code"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            required
          />
          <label
            htmlFor="verification_code"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {t("Mã xác minh")}
          </label>
        </div>
        <ButtonComponent
          padding={3}
          text={t("Xác minh mã")}
          hover={true}
          bold={true}
          fullScreen={true}
          height={"h-12"}
        />
      </form>
      <ButtonComponent
        className="mb-8"
        padding={3}
        text={t("Quay lại trang đăng nhập")}
        hover={true}
        bold={true}
        fullScreen={true}
        height={"h-12"}
        onClick={handleBackToLogin}
      />
    </div>
  );
};

export default ResetPasswordConfirmationPage;
