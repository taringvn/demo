import type {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import HideIcon from '../assets/icons/Hide';

import {Layout, Typography} from '../components';
import NotiDialog from '../components/NotiDialog';
import NavigatorMap from '../navigations/NavigatorMap';
import {UnAuthorizedStackParamsList} from '../navigations/types';
import {colors, commonStyles, spacing} from '../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: spacing(2),
    borderRadius: spacing(1),
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 14,
    color: colors.gray900,
    marginBottom: spacing(1),
    marginTop: spacing(1),
    fontWeight: 'bold',
  },
  nextBtn: {
    borderRadius: 3,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing(2),
    padding: spacing(1),
  },
});

type LoginWithSavedShopScreenNavigationProps = StackScreenProps<
  UnAuthorizedStackParamsList,
  NavigatorMap.LoginWithSavedShop
>;

const LoginWithSavedShop: React.FC<LoginWithSavedShopScreenNavigationProps> = ({navigation}) => {
  // TODO: just for reviewing
  const handlePressLogin = () => {
    navigation.navigate(NavigatorMap.VerifyAccount);
  };

  const handlePressForgotPassword = () => {
    navigation.navigate(NavigatorMap.ForgotPassword);
  };

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.header}>
          <Typography variant="h5" style={commonStyles.header}>
            Đăng nhập
          </Typography>
          <Typography style={commonStyles.header}>Cửa hàng: 174 Thái Hà</Typography>
        </View>
        <Typography style={styles.inputLabel}>Tên đăng nhập</Typography>
        <TextInput style={commonStyles.input} placeholder="Tên đăng nhập" />
        <View style={styles.header}>
          <Typography style={styles.inputLabel}>Mật khẩu</Typography>
          <HideIcon />
        </View>
        <TextInput
          style={commonStyles.input}
          secureTextEntry
          placeholder="Sử dụng 8 kí tự trở lên, không dùng kí tự đặc biệt"
        />
        <TouchableOpacity
          style={[styles.nextBtn, {backgroundColor: colors.blue}]}
          onPress={handlePressLogin}>
          <Typography variant="h5" style={commonStyles.buttonLabel}>
            Đăng nhập
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextBtn} onPress={handlePressForgotPassword}>
          <Typography variant="h6" style={[commonStyles.buttonLabel, {color: colors.orange}]}>
            Quên mật khẩu?
          </Typography>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default LoginWithSavedShop;
