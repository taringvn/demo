import type {StackScreenProps} from '@react-navigation/stack';
import React from 'react';

import {Layout, LoginCard} from '../../components';
import NavigatorMap from '../../navigations/NavigatorMap';
import {UnAuthorizedStackParamsList} from '../../navigations/types';
import {colors} from '../../themes';

type VerifyPasswordScreenNavigationProps = StackScreenProps<
  UnAuthorizedStackParamsList,
  NavigatorMap.VerifyPassword
>;

const VerifyPassword: React.FC<VerifyPasswordScreenNavigationProps> = ({
  navigation,
}: VerifyPasswordScreenNavigationProps) => {
  const handlePressForgotPassword = (): void => {
    navigation.navigate(NavigatorMap.ForgotPassword);
  };

  const handlePressNext = (): void => {
    // TODO
    navigation.navigate(NavigatorMap.VerifyOTP);
  };

  return (
    <Layout>
      <LoginCard
        labels={{
          title: 'Đăng nhập với mật khẩu',
          input: 'Nhập mật khẩu đã đăng kí',
          button: 'Đăng nhập',
          placeholder: '',
          helper: 'Quên mật khẩu?',
        }}
        cardColors={{nextBtn: colors.orange}}
        textInputProps={{secureTextEntry: true}}
        onPressHelperLink={handlePressForgotPassword}
        onPressNext={handlePressNext}
      />
    </Layout>
  );
};

export default VerifyPassword;
