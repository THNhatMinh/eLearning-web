import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Tạo file dịch cho mỗi ngôn ngữ
const resources = {
  en: {
    translation: {
      "Chào mừng": "Welcome",
      "Đăng nhập": "Login",
      "Đăng ký": "Register",
      "Tìm kiếm": "Search",
      "Thể loại": "Categories",
      "Giảng dạy trên Udemy": "Teach on Udemy",
      "Tìm kiếm nội dung bất kì": "Search for anything",
      "Chọn một ngôn ngữ": "Choice a language",
      "Study24": "Study24",
      "Tải ứng dụng": "Get the app",
      "Giới thiệu": "About us",
      "Hãy liên hệ với chúng tôi": "Contact us",
      "Nghề nghiệp": "Careers",
      "Blog": "Blog",
      "Trợ giúp và Hỗ trợ": "Help and Support",
      "Đơn vị liên kết": "Affiliate",
      "Nhà đầu tư": "Investors",
      "Điều khoản": "Terms",
      "Chính sách về quyền riêng tư": "Privacy policy",
      "Cài đặt cookie": "Cookie settings",
      "Sơ đồ trang web": "Sitemap",
      "Tuyến bố về khả năng tiếp cận": "Accessibility statement",
      "Tiếng việt": "English",
      "Bạn đang trong tình huống bế tắc?": "Stuck in neutral?",
      "Tăng tốc tương lai của bạn với những bài học từ McLaren Racing.": "Accelerate your future with lessons from McLaren Racing.",
      "Tham gia khóa học": "Take the course",
      "Kỹ năng thúc đẩy bạn tiến về phía trước": "Skills that drive you forward",
      "Bắt kịp tốc độ thay đổi nhanh chóng của công nghệ và nhu cầu công việc. Có được các kỹ năng để đạt được mục tiêu và duy trì tính cạnh tranh.": "Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.",
      "Gói dành cho tổ chức": "Plan for organizations",
      "Được hơn 16.000 công ty và hàng triệu học viên trên khắp thế giới tin dùng": "Trusted by over 16,000 companies and millions of learners around the world",
      "Phổ biến nhất": "Most popular",
      "Thể loại khác trên Udemy": "More from Udemy",
      "Cho phép nhóm của bạn truy cập vào hơn 27.000 khóa học hàng đầu của Udemy, ở mọi nơi và mọi lúc.": "Get your team access to over 27,000 top Udemy courses, anytime, anywhere.",
      "Dùng thử Study24": "Try Study24",
      "Biến kiến thức của bạn thành cơ hội và tiếp cận với hàng triệu người trên thế giới.": "Turn what you know into an opportunity and reach millions around the world.",
      "Tìm hiểu thêm": "Learn more",
      "Giỏ hàng của bạn đang trống.": "Your cart is empty.",
      "Tiếp tục mua sắm": "Keep shopping",
      "Tuyển tập khóa học rộng lớn": "A broad selection of courses",
      "Lựa chọn trong số hơn 250000 khóa học video online với nhiều nội dung bổ sung mới được xuất bản hàng tháng": "Choose from over 250,000 online video courses with new additions published every month",
      "Giúp bạn có thêm cơ hội nghề nghiệp với Python": "Expand your career opportunities with Python",
      "Khám phá": "Explore",
      "Thiết kế": "Design",
      "Phát triển": "Development",
      "Marketing": "Marketing",
      "CNTT và Phần mềm": "IT and Software",
      "Phát triển cá nhân": "Personal Development",
      "Kinh doanh": "Business",
      "Nhiếp ảnh": "Photography",
      "Âm nhạc": "Music",
      "Học viên đang xem": "Learners are viewing",
      "Các thể loại hàng đầu": "Top categories",
      "Chủ đề nổi bật theo thể loại": "Featured topics by category",
      "Khám phá thêm chủ đề": "Explore more topics",
      "Nâng cao kỹ năng cho đội ngũ nhân viên của bạn với Study24": "Upskill your team with Study24",
      "Truy cập không giới hạn hơn 27000 khóa học hàng đầu của Udemy, ở mọi nơi và mọi lúc": "Unlimited access to 27,000+ top Udemy courses, anytime, anywhere",
      "Tuyển tập khóa học quốc tế bằng 14 ngôn ngữ": "International course collection in 14 languages",
      "Các chứng chỉ hàng đầu về công nghệ và kinh doanh": "Top certifications in tech and business",
      "Hãy tham gia Study24": "Get Study24",
      "Trở thành giảng viên": "Become an instructor",
      "Giảng viên trên khắp thế giới giảng dạy hàng triệu học viên trên Udemy. Chúng tôi cung cấp công cụ và kỹ năng để dạy những gì bạn yêu thích.": "Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.",
      "Bắt đầu dạy học ngày hôm nay": "Start teaching today",
      "Đăng nhập vào tài khoản Udemy của bạn":"Log in to your Udemy account",
      "Mật khẩu": "Mật khẩu",
      "Quên mật khẩu": "Forgot Password",
      "Hoặc": "or",
      "Các tùy chọn đăng nhập khác": "Other log in options",
      "Đăng nhập vào tài khoản khác": "Đăng nhập vào tài khoản khác",
      "Bạn không có tài khoản?": "Don't have an account?",
      "Đăng nhập bằng tên tổ chức của bạn": "Log in with your organization",
      "Tên đầy đủ": "Full name",
      "Thêm vào giỏ hàng": "Add to cart"
    }
  },
  vi: {
    translation: {
      "Thêm vào giỏ hàng": "Thêm vào giỏ hàng",
      "Tên đầy đủ": "Tên đầy đủ",
      "Chào mừng": "Chào mừng",
      "Đăng nhập": "Đăng nhập",
      "Đăng ký": "Đăng ký",
      "Tìm kiếm": "Tìm kiếm",
      "Thể loại": "Thể loại",
      "Giảng dạy trên Udemy": "Giảng dạy trên Udemy",
      "Tìm kiếm nội dung bất kì": "Tìm kiếm nội dung bất kì",
      "Chọn một ngôn ngữ": "Chọn một ngôn ngữ",
      "Study24": "Study24",
      "Tải ứng dụng": "Tải ứng dụng",
      "Giới thiệu": "Giới thiệu",
      "Hãy liên hệ với chúng tôi": "Hãy liên hệ với chúng tôi",
      "Nghề nghiệp": "Nghề nghiệp",
      "Blog": "Blog",
      "Trợ giúp và Hỗ trợ": "Trợ giúp và Hỗ trợ",
      "Đơn vị liên kết": "Đơn vị liên kết",
      "Nhà đầu tư": "Nhà đầu tư",
      "Điều khoản": "Điều khoản",
      "Chính sách về quyền riêng tư": "Chính sách về quyền riêng tư",
      "Cài đặt cookie": "Cài đặt cookie",
      "Sơ đồ trang web": "Sơ đồ trang web",
      "Tuyến bố về khả năng tiếp cận": "Tuyến bố về khả năng tiếp cận",
      "Tiếng việt": "Tiếng việt",
      "Bạn đang trong tình huống bế tắc?": "Bạn đang trong tình huống bế tắc?",
      "Tăng tốc tương lai của bạn với những bài học từ McLaren Racing.": "Tăng tốc tương lai của bạn với những bài học từ McLaren Racing.",
      "Tham gia khóa học": "Tham gia khóa học",
      "Kỹ năng thúc đẩy bạn tiến về phía trước": "Kỹ năng thúc đẩy bạn tiến về phía trước",
      "Bắt kịp tốc độ thay đổi nhanh chóng của công nghệ và nhu cầu công việc. Có được các kỹ năng để đạt được mục tiêu và duy trì tính cạnh tranh.": "Bắt kịp tốc độ thay đổi nhanh chóng của công nghệ và nhu cầu công việc. Có được các kỹ năng để đạt được mục tiêu và duy trì tính cạnh tranh.",
      "Gói dành cho tổ chức": "Gói dành cho tổ chức",
      "Được hơn 16.000 công ty và hàng triệu học viên trên khắp thế giới tin dùng": "Được hơn 16.000 công ty và hàng triệu học viên trên khắp thế giới tin dùng",
      "Phổ biến nhất": "Phổ biến nhất",
      "Thể loại khác trên Udemy": "Thể loại khác trên Udemy",
      "Cho phép nhóm của bạn truy cập vào hơn 27.000 khóa học hàng đầu của Udemy, ở mọi nơi và mọi lúc.": "Cho phép nhóm của bạn truy cập vào hơn 27.000 khóa học hàng đầu của Udemy, ở mọi nơi và mọi lúc.",
      "Dùng thử Study24": "Dùng thử Study24",
      "Biến kiến thức của bạn thành cơ hội và tiếp cận với hàng triệu người trên thế giới.": "Biến kiến thức của bạn thành cơ hội và tiếp cận với hàng triệu người trên thế giới.",
      "Tìm hiểu thêm": "Tìm hiểu thêm",
      "Giỏ hàng của bạn đang trống.": "Giỏ hàng của bạn đang trống.",
      "Tiếp tục mua sắm": "Tiếp tục mua sắm",
      "Tuyển tập khóa học rộng lớn": "Tuyển tập khóa học rộng lớn",
      "Lựa chọn trong số hơn 250000 khóa học video online với nhiều nội dung bổ sung mới được xuất bản hàng tháng": "Lựa chọn trong số hơn 250000 khóa học video online với nhiều nội dung bổ sung mới được xuất bản hàng tháng",
      "Giúp bạn có thêm cơ hội nghề nghiệp với Python": "Giúp bạn có thêm cơ hội nghề nghiệp với Python",
      "Khám phá": "Khám phá",
      "Thiết kế": "Thiết kế",
      "Phát triển": "Phát triển",
      "Marketing": "Marketing",
      "CNTT và Phần mềm": "CNTT và Phần mềm",
      "Phát triển cá nhân": "Phát triển cá nhân",
      "Kinh doanh": "Kinh doanh",
      "Nhiếp ảnh": "Nhiếp ảnh",
      "Âm nhạc": "Âm nhạc",
      "Học viên đang xem": "Học viên đang xem",
      "Các thể loại hàng đầu": "Các thể loại hàng đầu",
      "Chủ đề nổi bật theo thể loại": "Chủ đề nổi bật theo thể loại",
      "Khám phá thêm chủ đề": "Khám phá thêm chủ đề",
      "Nâng cao kỹ năng cho đội ngũ nhân viên của bạn với Study24": "Nâng cao kỹ năng cho đội ngũ nhân viên của bạn với Study24",
      "Truy cập không giới hạn hơn 27000 khóa học hàng đầu của Udemy, ở mọi nơi và mọi lúc": "Truy cập không giới hạn hơn 27000 khóa học hàng đầu của Udemy, ở mọi nơi và mọi lúc",
      "Tuyển tập khóa học quốc tế bằng 14 ngôn ngữ": "Tuyển tập khóa học quốc tế bằng 14 ngôn ngữ",
      "Các chứng chỉ hàng đầu về công nghệ và kinh doanh": "Các chứng chỉ hàng đầu về công nghệ và kinh doanh",
      "Hãy tham gia Study24": "Hãy tham gia Study24",
      "Trở thành giảng viên": "Trở thành giảng viên",
      "Giảng viên trên khắp thế giới giảng dạy hàng triệu học viên trên Udemy. Chúng tôi cung cấp công cụ và kỹ năng để dạy những gì bạn yêu thích.": "Giảng viên trên khắp thế giới giảng dạy hàng triệu học viên trên Udemy. Chúng tôi cung cấp công cụ và kỹ năng để dạy những gì bạn yêu thích.",
      "Bắt đầu dạy học ngày hôm nay": "Bắt đầu dạy học ngày hôm nay",
      "Đăng nhập vào tài khoản Udemy của bạn":"Đăng nhập vào tài khoản Udemy của bạn",
      "Mật khẩu": "Mật khẩu",
      "Quên mật khẩu": "Quên mật khẩu",
      "Hoặc": "Hoặc",
      "Các tùy chọn đăng nhập khác": "Các tùy chọn đăng nhập khác",
      "Đăng nhập vào tài khoản khác": "Đăng nhập vào tài khoản khác",
      "Bạn không có tài khoản?": "Bạn không có tài khoản?",
      "Đăng nhập bằng tên tổ chức của bạn": "Đăng nhập bằng tên tổ chức của bạn",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'vi',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;