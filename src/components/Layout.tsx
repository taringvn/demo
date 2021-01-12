import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import PieIcon from '../assets/icons/Pie';

type LayoutProps = {
  children: JSX.Element;
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: 16,
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
    minHeight: 300,
    backgroundColor: 'white',
  },
  slogan: {
    color: 'white',
  },
});

const Layout: React.FC<LayoutProps> = ({children}: LayoutProps) => {
  const theme = useTheme();
  return (
    <SafeAreaView style={{...styles.root, backgroundColor: theme.colors.background}}>
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
