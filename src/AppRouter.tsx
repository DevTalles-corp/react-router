import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { PrivateRoute } from './auth/components/PrivateRoute';

import { AuthLayout } from './auth/layout/AuthLayout';
import { LoginPage } from './auth/pages/LoginPage';
import { RegisterPage } from './auth/pages/RegisterPage';

import { sleep } from './lib/sleep';
import { useQuery } from '@tanstack/react-query';
import { checkAuth } from './fake/fake-data';

// import ChatLayout from './chat/layout/ChatLayout';
// import ChatPage from './chat/pages/ChatPage';
const ChatLayout = lazy(async () => {
  await sleep(1500);
  return import('./chat/layout/ChatLayout');
});
const ChatPage = lazy(async () => import('./chat/pages/ChatPage'));
const NoChatSelectedPage = lazy(
  async () => import('./chat/pages/NoChatSelectedPage')
);

export const AppRouter = () => {
  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () => {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }

      return checkAuth(token);
    },
    retry: 0,
  });

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          {/* <Route path="login" element={<Login />} /> */}
          {/* <Route path="/auth" element={<Navigate to="/auth/login" />} /> */}
        </Route>

        {/* /chat */}
        <Route
          path="/chat"
          element={
            <Suspense
              fallback={
                <div className="flex h-screen w-full items-center justify-center bg-background">
                  <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                </div>
              }
            >
              <PrivateRoute isAuthenticated={!!user}>
                <ChatLayout />
              </PrivateRoute>
            </Suspense>
          }
        >
          <Route index element={<NoChatSelectedPage />} />
          <Route path="/chat/:clientId" element={<ChatPage />} />
        </Route>

        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};
