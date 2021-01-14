import {observer} from 'mobx-react-lite';
import React from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

import {Typography} from '../../components';
import {useNotiStore} from '../../hooks/useNotiStores';
import {colors, commonStyles, spacing} from '../../themes';

type AddNewShopDialogProps = {
  open: boolean;
  onClose: () => void;
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
  },
  inputLabel: {
    fontSize: 14,
    color: colors.gray900,
    marginBottom: spacing(1),
    marginTop: spacing(1),
    fontWeight: 'bold',
  },
  required: {
    color: colors.red,
  },
  actions: {
    height: 48,
    display: 'flex',
    marginTop: spacing(2),
    flexDirection: 'row',
  },
  back: {
    flex: 1,
    backgroundColor: colors.gray400,
    marginRight: spacing(1),
    borderRadius: 3,
  },
  create: {
    flex: 2,
    backgroundColor: colors.blue,
    borderRadius: 3,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const AddNewShopDialog: React.FC<AddNewShopDialogProps> = ({
  open,
  onClose,
}: AddNewShopDialogProps) => {
  const notiStore = useNotiStore();

  const handleSave = (): void => {
    notiStore?.showNoti('success', 'New shop is successful added');
  };
  return (
    <Modal isVisible={open}>
      <View style={styles.containerWrapper}>
        <View style={styles.container}>
          <Typography variant="h5" style={commonStyles.header}>
            Thêm cửa hàng
          </Typography>

          <Typography style={styles.inputLabel}>
            Tên cửa hàng <Typography style={styles.required}>*</Typography>
          </Typography>
          <TextInput style={commonStyles.input} placeholder="Tên cửa hàng" />
          <Typography style={styles.inputLabel}>Số điện thoại</Typography>
          <TextInput style={commonStyles.input} placeholder="Số điện thoại" />
          <Typography style={styles.inputLabel}>
            Địa chỉ <Typography style={styles.required}>*</Typography>
          </Typography>
          <TextInput style={commonStyles.input} placeholder="Vị trí, địa chỉ cửa hàng,..." />

          <View style={styles.actions}>
            <TouchableOpacity style={[styles.back, styles.center]} onPress={onClose}>
              <Typography variant="h5" style={commonStyles.buttonLabel}>
                Trở lại
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.create, styles.center]} onPress={handleSave}>
              <Typography variant="h5" style={commonStyles.buttonLabel}>
                Tạo
              </Typography>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default observer(AddNewShopDialog);
