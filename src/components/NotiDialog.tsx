import {observer} from 'mobx-react-lite';
import React from 'react';
import {StyleSheet, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';

import SuccessIcon from '../assets/icons/Success';
import WarningIcon from '../assets/icons/Warning';
import {useNotiStore} from '../hooks/useNotiStores';
import {colors, spacing} from '../themes';
import Typography from './Typography';

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 400,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  message: {
    marginTop: spacing(2),
  },
});

const NotiDialog: React.FC = () => {
  const notiStore = useNotiStore();

  let Icon = <SuccessIcon />;
  switch (notiStore?.variant) {
    case 'warning':
      Icon = <WarningIcon />;
      break;
    case 'loading':
      Icon = <ActivityIndicator animating size="large" color={colors.blue} />;
      break;
    case 'success':
    default:
      Icon = <SuccessIcon />;
      break;
  }

  return (
    <Modal isVisible={Boolean(notiStore?.message)} animationIn="fadeIn" animationOut="fadeOut">
      <View style={styles.containerWrapper}>
        <TouchableOpacity style={styles.container} onPress={notiStore?.closeNoti}>
          {Icon}
          <Typography variant="h6" style={styles.message}>
            {notiStore?.message || ''}
          </Typography>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default observer(NotiDialog);
