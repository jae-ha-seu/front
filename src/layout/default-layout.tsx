import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Gnb from '@/layout/gnb.tsx';

const DefaultLayout: FC = () => {
    return <>
        <Gnb />
        <Outlet />
    </>;
};

export default DefaultLayout;
