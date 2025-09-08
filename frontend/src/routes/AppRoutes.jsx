import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage.jsx";
import DashboardPage from "../pages/DashboardPage.jsx";
import OverviewPage from "../pages/overview/Overview.jsx";
import OTP from "../pages/otpvalid/OtpRead.jsx";
import ManageTask from "../pages/manageTask/ManageTask.jsx";
import taskData from "../data/TaskData.jsx";
import CreateTaskPage from "../pages/createTask/createTaskPage.jsx";
import ProtectedRoute from "../components/ProtectedRoutes/ProtectedRoute.jsx";
import TeamMembersPage from "../pages/teamMembers/teamMembers.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Dashboard and nested routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      >
        <Route path="overview" element={<OverviewPage />} />
        <Route path="task" element={<ManageTask tasks={taskData} />} />
        <Route path="createTask" element={<CreateTaskPage />} />
        <Route path="teamMembers" element={<TeamMembersPage />} />
        <Route path="otp" element={<OTP />} />
        {/* Add other nested routes here */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
