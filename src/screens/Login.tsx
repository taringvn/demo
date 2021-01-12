import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';

import Layout from '../components/Layout';
import LoginCard from '../components/LoginCard';
import NavigatorMap from '../navigations/NavigatorMap';
import {UnAuthorizedStackParamsList} from '../navigations/types';

type LoginScreenNavigationProps = StackScreenProps<UnAuthorizedStackParamsList, NavigatorMap.Login>;

const Login: React.FC<LoginScreenNavigationProps> = () => {
  return (
    <Layout>
      <LoginCard
        labels={{
          title: 'Đăng nhập hệ thống',
          input: 'Email/ Số điện thoại đăng kí',
          button: 'Tiếp tục',
          placeholder: 'Nhập email hoặc số điện thoại',
        }}
      />
    </Layout>
  );
};

export default Login;
