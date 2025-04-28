import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage.jsx';
import DashboardPage from '../pages/DashboardPage.jsx';
import OverviewPage from '../pages/overview/Overview.jsx';
import OTP from '../pages/otpvalid/OtpRead.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Dashboard and nested routes */}
      <Route path="/dashboard" element={<DashboardPage />}>
        <Route path="overview" element={<OverviewPage />} />
        <Route path="otp" element={<OTP/>} />
        {/* Add other nested routes here */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
