import React, {useEffect, useState} from 'react';
import {StyleSheet, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';

import SuccessIcon from '../assets/icons/Success';
import WarningIcon from '../assets/icons/Warning';
import {colors, spacing} from '../themes';
import Typography from './Typography';

type NotiDialogProps = {
  variant?: 'success' | 'warning' | 'loading';
  message?: string;
  onPress?: () => void;
};

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

export default function NotiDialog({message, variant = 'success', onPress}: NotiDialogProps) {
  let Icon = <SuccessIcon />;
  switch (variant) {
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
    <Modal isVisible={Boolean(message)}>
      <View style={styles.containerWrapper}>
        <TouchableOpacity style={styles.container} onPress={onPress}>
          {Icon}
          <Typography variant="h6" style={styles.message}>
            {message}
          </Typography>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
