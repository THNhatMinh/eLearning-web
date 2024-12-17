import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import api from "../../api/axios"; // Import the axios instance
import { DeleteEmail } from "../../redux/authSlice";

const ResetPasswordVerificationPage = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [verificationCode, setVerificationCode] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/account/reset-password-confirmation", {
                verificationCode,
            });
            console.log("Verification code is correct:", response.data);
            navigate("/reset-password-confirmation");
        } catch (error) {
            console.error("Password reset failed:", error.response.data);
        }
    };

    const handleBackToLogin = () => {
        dispatch(DeleteEmail());
        navigate("/login");
    };

    return (
        <div className="max-w-xl w-full mx-auto mt-12 text-left my-4"> {/* Wider container */}
            <h1 className="text-3xl font-bold mb-4">{t("Nhập mã xác nhận")}</h1> {/* Slightly larger title */}
            <p className="mb-6 text-lg">
                {t("Một mã xác nhận lại mật khẩu đã được gửi đến email của bạn.")}
            </p>
            <form onSubmit={handleSubmit} className="space-y-6"> {/* Added spacing */}
                <div className="relative z-0 w-full group">
                    <input
                        type="text"
                        name="verification_code"
                        id="verification_code"
                        className="block py-3 px-2 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        required
                    />
                    <label
                        htmlFor="verification_code"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        {t("Mã xác minh")}
                    </label>
                </div>

                {/* Buttons in the same column, spaced vertically */}
                <div className="space-y-4"> {/* Vertical spacing for buttons */}
                    <ButtonComponent
                        padding={3}
                        text={t("Xác minh mã")}
                        hover={true}
                        bold={true}
                        fullScreen={true}
                        height={"h-12"}
                        onClick={handleSubmit}
                    />
                    <ButtonComponent
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

export default ResetPasswordVerificationPage;
