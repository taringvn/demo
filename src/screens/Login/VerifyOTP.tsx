import React from 'react';

import type {StackScreenProps} from '@react-navigation/stack';

import {Layout, LoginCard} from '../../components';
import {UnAuthorizedStackParamsList} from '../../navigations/types';
import {colors} from '../../themes';
import NavigatorMap from '../../navigations/NavigatorMap';

type VerifyOTPScreenNavigationProps = StackScreenProps<
  UnAuthorizedStackParamsList,
  NavigatorMap.VerifyOTP
>;

const VerifyOTP: React.FC<VerifyOTPScreenNavigationProps> = ({
  navigation,
}: VerifyOTPScreenNavigationProps) => {
  const handlePressNext = (): void => {
    // TODO
    navigation.navigate(NavigatorMap.Shops);
  };

  return (
    <Layout>
      <LoginCard
        labels={{
          title: 'Xác thực danh tính',
          input: 'Nhập mã xác thực',
          button: 'Tiếp tục',
          placeholder: 'Mã xác thực được gửi về SĐT của bạn',
        }}
        cardColors={{nextBtn: colors.orange, helperText: colors.orange}}
        onPressNext={handlePressNext}
      />
    </Layout>
  );
};

export default VerifyOTP;
