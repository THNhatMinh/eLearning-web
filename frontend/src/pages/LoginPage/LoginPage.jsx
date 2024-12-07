import React from "react";
import { useTranslation } from "react-i18next";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";
import { Link, useNavigate } from "react-router-dom";
const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleRegisterNavigate = () => {
    navigate("/register");
  };
  return (
    <div className="max-w-[1292px] mx-auto">
      <div className="py-16 flex justify-between items-center">
        <div className="max-w-[638px]">
          <img src="assets/imgs/bg-login.webp" alt="" />
        </div>
        <div className="max-w-[420px]">
          <h1 className="font-sans">
            {t("Đăng nhập vào tài khoản Study24 của bạn")}
          </h1>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              className="block p-4 pt-6  w-full bg-transparent border-[1px] appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-bold absolute font-bold duration-300 transform -translate-y-6 scale-75 top-5 left-4 -z-10 origin-[0] peer-focus:start-4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              {t("Email address")}
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              className="block p-4 pt-6  w-full bg-transparent border-[1px] appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-bold absolute font-bold duration-300 transform -translate-y-6 scale-75 top-5 left-4 -z-10 origin-[0] peer-focus:start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              {t("Password")}
            </label>
          </div>
          <div>
            <ButtonComponent
              padding={3}
              text={t("Đăng nhập")}
              hover={true}
              bold={true}
              fullScreen={true}
              height={"h-12"}
            />
          </div>
          <div className="text-base text-center mt-6 mb-4">
            <span>{t("Hoặc")} </span>
            <Link
              to="/forgot-password"
              className="text-eighth font-bold underline"
            >
              {t("Quên mật khẩu")}
            </Link>
          </div>
          <div>
            {/* <div className='border-b-[1px] border-[#d1d7dc]'>
              <ButtonComponent link={t("Đăng nhập vào tài khoản khác")} notHover={true} colorBg={"third"} colorBoder={"white"} height={"h-12"} fullScreen={true}/>
            </div> */}
            <div className="border-b-[1px] border-[#d1d7dc]">
              <ButtonComponent
                link={t("Đăng ký")}
                text={t("Bạn không có tài khoản?")}
                notHover={true}
                colorBg={"third"}
                colorBoder={"white"}
                height={"h-12"}
                fullScreen={true}
                onClick={handleRegisterNavigate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
