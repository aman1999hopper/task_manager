import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage.jsx";
import DashboardPage from "../pages/DashboardPage.jsx";
import OverviewPage from "../pages/overview/Overview.jsx";
import OTPRead from "../pages/otpvalid/OtpRead.jsx";
import ManageTask from "../pages/manageTask/ManageTask.jsx";
import taskData from "../data/TaskData.jsx";
import CreateTaskPage from "../pages/createTask/createTaskPage.jsx";
import ProtectedRoute from "../components/ProtectedRoutes/ProtectedRoute.jsx";
import TeamMembersPage from "../pages/teamMembers/teamMembers.jsx";
import TestCase from "../pages/testFile/testCase1.jsx";

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
        
        {/* Add other nested routes here */}
      </Route>
      <Route path="otp" element={<OTPRead />} />
      <Route path="test" element={<TestCase/>}/>
    </Routes>
  );
};

export default AppRoutes;
