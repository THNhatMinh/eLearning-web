import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import api from "../../api/axios"; // Import the axios instance
import { DeleteEmail, LogInUser } from "../../redux/authSlice";

const ResetPasswordConfirmationPage = () => {
  const { t } = useTranslation();
  const { email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  const [passwordConfirm, setConfirmPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/account/reset-password", {
        email,
        newPassword,
        passwordConfirm
      });
      console.log("Password reset successful:", response.data);
      dispatch(LogInUser(email));
      navigate("/");
    } catch (error) {
      console.error("Password reset failed:", error.response.data);
    }
  };

  const handleBackToLogin = () => {
    dispatch(DeleteEmail());
    navigate("/login");
  };

  return (
    <div className="max-w-xl w-full mx-auto mt-12 text-left my-4">
      <h1 className="text-2xl font-bold mb-4">{t("Đặt lại mật khẩu")}</h1>
      <p className="mb-6">
        {t("Vui lòng nhập mật khẩu mới của bạn.")}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="new_password"
            id="new_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <label
            htmlFor="new_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {t("Mật khẩu mới")}
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="floating_confirm_password"
            id="floating_confirm_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={passwordConfirm}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <label
            htmlFor="floating_confirm_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {t("Xác nhận mật khẩu mới")}
          </label>
        </div>
        <div className="space-y-4">
          <ButtonComponent
            padding={3}
            text={t("Đặt lại mật khẩu")}
            hover={true}
            bold={true}
            fullScreen={true}
            height={"h-12"}
            onClick={handleSubmit}
          />
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
      </form>
    </div>
  );
};

export default ResetPasswordConfirmationPage;













