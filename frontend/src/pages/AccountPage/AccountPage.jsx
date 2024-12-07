import { t } from "i18next";
import React from "react";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

const AccountPage = () => {
  return (
    <div>
      <div className="max-w-[1340px] mx-auto">
        <div className="flex justify-between items-center ">
          <div>
            <img className="w-[72px]" src="assets/logos/logo.png" alt="" />
          </div>
          <div className="flex h-[72px] items-center gap-5">
            <Link to="/" className="hover:text-eighth">
              Học viên
            </Link>
            <div>
              <img
                className="w-6 h-6"
                src="https://img.icons8.com/ios/50/alarm--v1.png"
                alt="alarm--v1"
              />
            </div>
            <div className="rounded-full w-8 h-8  text-white font-bold bg-first flex items-center justify-center">
              PQ
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center shadow-lg p-12 mt-12 mb-6">
          <p className="text-eighth">Bắt đầu tạo khóa học</p>
          <ButtonComponent
            colorHover={"#0000008c"}
            padding={3}
            text={t("Tạo khóa học của bạn")}
            bold={true}
            textColor={"white"}
            colorBg={"first"}
          />
        </div>
        <p className="text-center m-16">
          Dựa trên trải nghiệm của bạn, chúng tôi nghĩ rằng những tài nguyên này
          sẽ hữu ích.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex justify-center gap-3 shadow-lg col-span-2 py-4 px-12">
            <div className="w-52">
              <img
                className="w-52"
                src="https://s.udemycdn.com/instructor/dashboard/engaging-course.jpg"
                alt=""
              />
            </div>
            <div className="w-[540px] flex flex-col h-full justify-between">
              <h3>Tạo khóa học thu hút</h3>
              <p>
                Dù bạn là một giáo viên kỳ cựu hay đang bắt đầu sự nghiệp giảng
                dạy, chúng tôi luôn đồng hành cùng bạn. Với kho tàng tài liệu
                phong phú và những phương pháp giảng dạy hiệu quả, bạn sẽ dễ
                dàng tạo ra những bài học sinh động và cuốn hút, bất kể mức độ
                kinh nghiệm."
              </p>
              <Link className="text-eighth">Bắt đầu</Link>
            </div>
          </div>
          <div className="flex gap-3 shadow-lg pt-8 px-12 pb-4">
            <div className="w-52">
              <img
                className="w-52"
                src="https://s.udemycdn.com/instructor/dashboard/video-creation.jpg"
                alt=""
              />
            </div>
            <div className="w-[350px] flex flex-col h-full justify-between">
              <h3>Tạo khóa học thu hút</h3>
              <p>
                Muốn trở thành một giáo viên xuất sắc? Chúng tôi sẽ giúp bạn!
                Cho dù bạn là người mới bắt đầu hay muốn nâng cao kỹ năng giảng
                dạy, những tài liệu và công cụ này sẽ là người bạn đồng hành tin
                cậy, giúp bạn không ngừng phát triển và hoàn thiện bản thân.
              </p>
              <Link className="text-eighth">Bắt đầu</Link>
            </div>
          </div>
          <div className="flex gap-3 shadow-lg pt-8 px-12 pb-4">
            <div className="w-52">
              <img
                className="w-52"
                src="https://s.udemycdn.com/instructor/dashboard/build-audience.jpg"
                alt=""
              />
            </div>
            <div className="w-[350px] flex flex-col h-full justify-between">
              <h3>Tạo khóa học thu hút</h3>
              <p>
                Mỗi giáo viên đều có một câu chuyện để kể. Hãy để chúng tôi giúp
                bạn viết tiếp câu chuyện đó! Với những gợi ý và hỗ trợ từ chúng
                tôi, bạn sẽ tự tin đứng trước lớp và truyền cảm hứng cho học
                sinh.
              </p>
              <Link className="text-eighth">Bắt đầu</Link>
            </div>
          </div>
          <div className="flex justify-center gap-3 shadow-lg col-span-2 py-4 px-12">
            <div className="w-52">
              <img
                className="w-52"
                src="https://s.udemycdn.com/instructor/dashboard/newcomer-challenge.jpg"
                alt=""
              />
            </div>
            <div className="w-[540px] flex flex-col h-full justify-between">
              <h3>Tạo khóa học thu hút</h3>
              <p>
                Bạn muốn tạo ra những bài học hiệu quả và giúp học sinh đạt được
                kết quả tốt nhất? Chúng tôi có tất cả những gì bạn cần! Từ những
                phương pháp giảng dạy sáng tạo đến các công cụ đánh giá hiệu
                quả, chúng tôi sẽ trang bị cho bạn đầy đủ kiến thức và kỹ năng
                để thành công.
              </p>
              <Link className="text-eighth">Bắt đầu</Link>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default AccountPage;
