import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PieIcon from '../assets/icons/Pie';
import {colors} from '../themes/colors';
import {spacing} from '../themes/spacing';

type LayoutProps = {
  children: JSX.Element;
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: spacing(2),
    backgroundColor: colors.blue800,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    minWidth: 400,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  slogan: {
    color: 'white',
  },
});

const Layout: React.FC<LayoutProps> = ({children}: LayoutProps) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.center}>
        <PieIcon />
      </View>
      <View style={styles.containerWrapper}>
        <View style={styles.container}>{children}</View>
      </View>
      <View style={styles.center}>
        <Text style={styles.slogan}>Luôn luôn lắng nghe, luôn luôn thấu hiểu</Text>
      </View>
    </SafeAreaView>
  );
};

export default Layout;
