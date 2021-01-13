import type {StackScreenProps} from '@react-navigation/stack';
import React from 'react';

import {Layout, LoginCard} from '../components';
import NavigatorMap from '../navigations/NavigatorMap';
import {UnAuthorizedStackParamsList} from '../navigations/types';
import {colors} from '../themes';

type ForgotPasswordScreenNavigationProps = StackScreenProps<
  UnAuthorizedStackParamsList,
  NavigatorMap.ForgotPassword
>;

const ForgotPassword: React.FC<ForgotPasswordScreenNavigationProps> = ({
  navigation,
}: ForgotPasswordScreenNavigationProps) => {
  const navigateBackToLogin = (): void => {
    navigation.navigate(NavigatorMap.VerifyAccount);
  };
  return (
    <Layout>
      <LoginCard
        labels={{
          title: 'Yêu cầu đặt lại mật khẩu',
          input: 'Địa chỉ email',
          button: 'Gửi yêu cầu',
          placeholder: '',
          helper: 'Đăng nhập',
        }}
        cardColors={{nextBtn: colors.orange, helperText: colors.blue}}
        onPressHelperLink={navigateBackToLogin}
      />
    </Layout>
  );
};

export default ForgotPassword;
