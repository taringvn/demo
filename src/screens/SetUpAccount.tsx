import React from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';

import {Layout} from '../components';
import {colors, commonStyles, spacing} from '../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: spacing(2),
    borderRadius: spacing(1),
  },
  inputLabel: {
    fontSize: 14,
    color: colors.gray900,
    marginBottom: spacing(1),
    marginTop: spacing(1),
  },
});

export default function SetUpAccount() {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={commonStyles.header}>Thiết lập tài khoản kinh doanh</Text>

        <Text style={styles.inputLabel}>Tên chủ doanh nghiệp</Text>
        <TextInput style={commonStyles.input} placeholder="Họ và tên" />

        <Text style={styles.inputLabel}>Mật khẩu</Text>
        <TextInput style={commonStyles.input} secureTextEntry placeholder="Bao gồm chữ và số" />

        <Text style={styles.inputLabel}>Xác nhận mật khẩu</Text>
        <TextInput
          style={commonStyles.input}
          secureTextEntry
          placeholder="Sử dụng 8 kí tự trở lên, bao gồm chữ và số"
        />

        <TouchableOpacity style={commonStyles.button}>
          <Text style={commonStyles.buttonLabel}>Tạo</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}
