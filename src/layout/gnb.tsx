import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  height: 102px;
  display: flex;
  align-items: center;
  column-gap: 12px;
`;
const Gnb: FC = () => {
    return <Header>
        <Link to={'/'}>즐탁</Link>
        <div>대시보드</div>
        <div>대회</div>
        <div>랭킹</div>
        <Link to={'/my-page'}>마이페이지</Link>
    </Header>;
};

export default Gnb;
