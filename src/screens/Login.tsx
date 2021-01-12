import React from 'react';

import Layout from '../components/Layout';
import LoginCard from '../components/LoginCard';

export default function Login() {
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
}
