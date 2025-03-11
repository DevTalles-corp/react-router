import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { AuthLayout } from './auth/layout/AuthLayout';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          {/* <Route path="login" element={<Login />} /> */}
          {/* <Route path="register" element={<Register />} /> */}
        </Route>

        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};
