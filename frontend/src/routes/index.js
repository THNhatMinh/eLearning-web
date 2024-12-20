import CoursePage from "../pages/CoursePage/CoursePage";
import DefaultPage from "../pages/DefaultPage/DefaultPage";
import TeacherPage from "../pages/TeacherPage/TeacherPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import AccountPage from "../pages/AccountPage/AccountPage";
import CartPage from "../pages/CartPage/CartPage";
import CourseCreate from "../pages/TeacherPage/CourseCreate";
import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordConfirmationPage from "../pages/ResetPasswordConfirmationPage/ResetPasswordConfirmationPage";
import MyLearningPage from "../pages/MyLearningPage/MyLearningPage";
import MyListsPage from "../pages/MyLearningPage/Mylist";
import WishlistPage from "../pages/MyLearningPage/Wishlist";
import ArchivedPage from "../pages/MyLearningPage/Archived";
import LearningToolsPage from "../pages/MyLearningPage/LearningTool";
<<<<<<< Updated upstream
import ResetPasswordVerificationPage from "../pages/VerificationPage/VerificationPage";
=======
import PreviewPage from "../pages/PreviewPage/PreviewPage";
>>>>>>> Stashed changes
export const routes = [
  {
    path: "/",
    element: <DefaultPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "forgot-password", element: <ForgotPasswordPage /> },
      {
        path: "reset-password-confirmation",
        element: <ResetPasswordConfirmationPage />,
      },
      {path: "reset-password-verification", element: <ResetPasswordVerificationPage/>},
      { path: "register", element: <RegisterPage /> },
      { path: "teacher", element: <TeacherPage /> },
      { path: "teacher/coursecreate", element: <CourseCreate /> },
      { path: "cart", element: <CartPage /> },
      { path: "course", element: <CoursePage /> },
      { path: "my-learning", element: <MyLearningPage /> },
      { path: "my-lists", element: <MyListsPage /> },
      { path: "wishlist", element: <WishlistPage /> },
      { path: "archived", element: <ArchivedPage /> },
      { path: "learning-tools", element: <LearningToolsPage /> },
      { path: "preview-lesson", element: <PreviewPage /> }
    ],
  },
  { path: "/account", element: <AccountPage /> },
];
