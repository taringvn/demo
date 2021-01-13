import React from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';

import {Layout} from '../components';
import {colors, spacing} from '../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: spacing(2),
    borderRadius: spacing(1),
  },
  title: {
    fontSize: 20,
    color: colors.blue900,
    marginBottom: spacing(2),
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: 14,
    color: colors.gray900,
    marginBottom: spacing(1),
    marginTop: spacing(1),
  },
  input: {
    backgroundColor: colors.gray100,
    borderWidth: 1,
    width: '100%',
    height: 40,
    borderColor: colors.gray200,
    borderRadius: spacing(0.5),
  },
  button: {
    borderRadius: 3,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing(2),
    padding: spacing(1),
    backgroundColor: colors.blue,
  },
  buttonLabel: {
    fontSize: 20,
    color: colors.white,
  },
});

export default function SetUpAccount() {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Thiết lập tài khoản kinh doanh</Text>

        <Text style={styles.inputLabel}>Tên chủ doanh nghiệp</Text>
        <TextInput style={styles.input} placeholder="Họ và tên" />

        <Text style={styles.inputLabel}>Mật khẩu</Text>
        <TextInput style={styles.input} secureTextEntry placeholder="Bao gồm chữ và số" />

        <Text style={styles.inputLabel}>Xác nhận mật khẩu</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Sử dụng 8 kí tự trở lên, bao gồm chữ và số"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonLabel}>Tạo</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}
