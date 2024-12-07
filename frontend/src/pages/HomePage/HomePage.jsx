import React, { useEffect, useState } from "react";
import { SlideComponent } from "../../components/SlideComponent/SlideComponent";
import { useTranslation } from "react-i18next";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";
import { SlideCourse } from "../../components/SlideComponent/SlideCourse";
import listCourses from "../../pages/HomePage/courseData";
// Move listCourses outside the component

const HomePage = () => {
  const { t } = useTranslation();
  const [activeButton, setActiveButton] = useState("");
  const [listTagCourses, setListTagCourses] = useState([]);

  useEffect(() => {
    const types = [...new Set(listCourses.map((course) => course.type))];
    setListTagCourses(types);
    setActiveButton(types[0]);
  }, []);

  return (
    <div>
      <div className="max-w-[1340px] mx-auto mb-12 relative z-0">
        <SlideComponent />
      </div>
      <div className="bg-third mb-8 "></div>
      <div className="mx-auto max-w-[1292px] px-6">
        <div className="mb-4">
          <h1>{t("Tuyển tập khóa học rộng lớn")}</h1>
          <p className="text-[19px] mt-4">
            {t(
              "Lựa chọn trong số hơn 250000 khóa học video online với nhiều nội dung bổ sung mới được xuất bản hàng tháng"
            )}
          </p>
        </div>
        <div className=" px-6">
          <div className="flex flex-wrap mx-auto max-w-[1292px] gap-4 text-third text-base font-bold">
            {listTagCourses?.length > 0 &&
              listTagCourses?.map((data, index) => {
                return (
                  <div key={`coursePopular-${index}`}>
                    <button
                      className={`px-1 py-2 ${
                        activeButton === data ? "text-first" : ""
                      }`}
                      onClick={() => setActiveButton(data)}
                    >
                      <span>{data}</span>
                    </button>
                  </div>
                );
              })}
          </div>
          <div className="p-8 border border-[#d1d7dc]">
            <h2>{t("Giúp bạn có thêm cơ hội nghề nghiệp với Python")}</h2>
            <div className="mb-8 mt-4">
              <ButtonComponent
                text={`${t("Khám phá")} ${activeButton}`}
                hover={true}
                bold={true}
              />
            </div>
            <SlideCourse
              typeCourse={activeButton}
              listCourses={listCourses}
              slideShow={4}
            />
          </div>
          <div className="mt-16 mb-24">
            <h2 className="mb-4">{t("Học viên đang xem")}</h2>
            <SlideCourse listCourses={listCourses} slideShow={5} />
          </div>
          <div>
            <h2 className="mb-6">{t("Các thể loại hàng đầu")}</h2>
            <div className="grid grid-cols-4 gap-x-6 tabletXs:grid-cols-3">
              {[
                "Thiết kế",
                "Phát triển",
                "Marketing",
                "CNTT và Phần mềm",
                "Phát triển cá nhân",
                "Kinh doanh",
                "Nhiếp ảnh",
                "Âm nhạc",
              ].map((category, index) => (
                <div key={`category-${index}`}>
                  <Link>
                    <div>
                      <div className="max-w-[300px] overflow-hidden">
                        <img
                          src={`assets/types/type${index}.jpg`}
                          alt=""
                          className="hover:scale-105 duration-500"
                        />
                      </div>
                      <p className="font-base font-bold pt-2 pb-8">
                        {t(category)}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-third mt-16 ">
        <div className="mx-auto max-w-[1292px] px-6 py-16">
          <h2 className="mb-5">{t("Chủ đề nổi bật theo thể loại")}</h2>
          <div className="grid grid-cols-4 tabletXs:grid-cols-2">
            {[
              {
                title: "Development",
                topics: ["Python", "Web Development", "Machine Learning"],
              },
              {
                title: "Business",
                topics: ["Financial Analysis", "SQL", "PMP"],
              },
              {
                title: "IT and Software",
                topics: ["Amazon AWS", "Ethical Hacking", "Cyber Security"],
              },
              {
                title: "Design",
                topics: ["Photoshop", "Graphic Design", "Drawing"],
              },
            ].map((category, index) => (
              <ul key={`category-list-${index}`} className="pr-2 pb-6">
                <p className="text-[19px] font-bold mb-6">{category.title}</p>
                {category.topics.map((topic, idx) => (
                  <li key={`topic-${idx}`} className="mt-6">
                    <Link className="text-eighth text-base underline font-bold">
                      {topic}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <ButtonComponent
            text={t("Khám phá thêm chủ đề")}
            hover={true}
            bold={true}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
