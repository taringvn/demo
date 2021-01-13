import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';

import {Layout, LoginCard} from '../../components';
import NavigatorMap from '../../navigations/NavigatorMap';
import {UnAuthorizedStackParamsList} from '../../navigations/types';

type VerifyAccountScreenNavigationProps = StackScreenProps<
  UnAuthorizedStackParamsList,
  NavigatorMap.VerifyAccount
>;

const VerifyAccount: React.FC<VerifyAccountScreenNavigationProps> = ({
  navigation,
}: VerifyAccountScreenNavigationProps) => {
  const handlePressNext = (): void => {
    // TODO: save to store/ call endpoint, etc,...
    navigation.navigate(NavigatorMap.VerifyPassword);
  };
  return (
    <Layout>
      <LoginCard
        labels={{
          title: 'Đăng nhập hệ thống',
          input: 'Email/ Số điện thoại đăng kí',
          button: 'Tiếp tục',
          placeholder: 'Nhập email hoặc số điện thoại',
        }}
        onPressNext={handlePressNext}
      />
    </Layout>
  );
};

export default VerifyAccount;
