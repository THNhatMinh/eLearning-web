import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
const RegisterPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  /* to use axios to connect backend*/
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/account/register", {
        name,
        email,
        password,
      });
      console.log("Registration successful:", response.data);
      // Save the token and navigate to the dashboard or home page
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error.response.data);
    }
  };

  const handleRegisterLogin = () => {
    // no use when  we use axios to connect backend instead
    navigate("/login");
  };
  return (
    <div className="max-w-[1292px] mx-auto">
      <div className="py-16 flex justify-between items-center">
        <div className="max-w-[638px]">
          <img src="assets/imgs/bg-login.webp" alt="" />
        </div>
        <div className="max-w-[420px]">
          <h1 className="font-sans">
            {t("Đăng kỳ vào tài khoản Study24 của bạn")}
          </h1>
          <form onSubmit={handleRegister}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                className="block p-4 pt-6  w-full bg-transparent border-[1px] appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label
                htmlFor="floating_name"
                className="peer-focus:font-bold absolute font-bold duration-300 transform -translate-y-6 scale-75 top-5 left-4 -z-10 origin-[0] peer-focus:start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                {t("Tên đầy đủ")}
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                className="block p-4 pt-6  w-full bg-transparent border-[1px] appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                text={t("Đăng ký")}
                hover={true}
                bold={true}
                fullScreen={true}
                height={"h-12"}
              />
            </div>
          </form>
          <div className="flex justify-center gap-4 mt-6 mb-16">
            <span>
              <input type="checkbox" />
            </span>
            <span>
              Bằng việc đăng ký, bạn đồng ý với{" "}
              <b className="text-eighth">Điều khoản</b> sử dụng và{" "}
              <b className="text-eighth">Chính sách</b> về quyền riêng tư.
            </span>
          </div>
          <div>
            {/* <div className='border-b-[1px] border-[#d1d7dc]'>
              <ButtonComponent link={t("Đăng nhập vào tài khoản khác")} notHover={true} colorBg={"third"} colorBoder={"white"} height={"h-12"} fullScreen={true}/>
            </div> */}
            <div className="border-b-[1px] border-[#d1d7dc]">
              <ButtonComponent
                link={t("Đăng nhập")}
                text={t("You already have an account?")}
                notHover={true}
                colorBg={"third"}
                colorBoder={"white"}
                height={"h-12"}
                fullScreen={true}
                onClick={handleRegisterLogin}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
