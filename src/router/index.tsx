import { createBrowserRouter } from 'react-router-dom';

import DefaultLayout from '@/layout/default-layout.tsx';
import Home from '@/pages/home.tsx';
import MyPage from '@/pages/my-page.tsx';
import SignIn from '@/pages/sign-in';
import SignUp from '@/pages/sign-up';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                element: <Home />,
                index: true,
            },
            {
                path: '/my-page',
                element: <MyPage />
            }
        ]
        // lazy: () => import('@/pages/home.tsx'),
    },
    {
        path: '/',
        element: <SignIn />,
    },
    {
        path: '/',
        element: <SignUp />,
    },
]);

export default router;
