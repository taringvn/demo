import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {color} from 'react-native-reanimated';
import AddIcon from '../../assets/icons/Add';
import SelectIcon from '../../assets/icons/Select';

import {Layout} from '../../components';
import {colors, spacing} from '../../themes';
import AddNewShopDialog from './AddNewShopDialog';

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
  },
  flatlist: {
    maxHeight: 300,
  },

  itemContainer: {
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing(1),
    marginTop: spacing(1),
    marginBottom: spacing(1),
  },
  store: {
    fontSize: 14,
    color: colors.blue,
  },
  phone: {
    fontSize: 12,
    color: colors.gray900,
  },
  address: {
    fontSize: 14,
    color: colors.green,
  },
  gutterBottom: {
    marginBottom: spacing(0.5),
  },

  footerContainer: {
    backgroundColor: colors.gray300,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing(1),
    marginTop: spacing(1),
    marginBottom: spacing(1),
  },
  footerLabel: {
    color: colors.gray400,
    marginLeft: spacing(1),
    fontSize: 12,
  },
  nextBtn: {
    borderRadius: 3,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing(2),
    padding: spacing(1),
    backgroundColor: colors.blue,
  },
  btnLabel: {
    fontSize: 20,
    color: colors.white,
  },
});

type Shop = {
  id: number | string;
  storeName: string;
  phone: string;
  address: string;
};

const mockShops: Shop[] = [
  {id: 1, storeName: 'Cửa hàng thời trang Ant', phone: '+84-62626262', address: '174 Thái Hà'},
  {id: 2, storeName: 'Cửa hàng tạp hóa Ant', phone: '+84-62626262', address: '1st Đại Cồ Việt'},
];

const Shops: React.FC = () => {
  const [selectedShop, setSelectedShop] = useState<Shop>();
  const [openAddNewShopDialog, setOpenAddNewShopDialog] = useState<boolean>(false);

  const toggleAddNewShopDialog = (): void => setOpenAddNewShopDialog((prev) => !prev);

  const renderItem = ({item}: {item: Shop}) => {
    const isSelected = selectedShop?.id === item.id;
    return (
      <TouchableOpacity
        style={[styles.itemContainer, {backgroundColor: isSelected ? colors.teal : colors.gray300}]}
        onPress={() => setSelectedShop(item)}>
        <View>
          <Text style={[styles.store, styles.gutterBottom]}>{item.storeName}</Text>
          <Text style={[styles.phone, styles.gutterBottom]}>{item.phone}</Text>
          <Text style={styles.address}>{item.address}</Text>
        </View>
        {isSelected && (
          <View>
            <SelectIcon />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const renderFooter = () => {
    return (
      <TouchableOpacity style={styles.footerContainer} onPress={toggleAddNewShopDialog}>
        <AddIcon />
        <Text style={styles.footerLabel}>Thêm cửa hàng</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Chọn cửa hàng</Text>
        <FlatList
          style={styles.flatlist}
          data={mockShops}
          renderItem={renderItem}
          ListFooterComponent={renderFooter}
          keyExtractor={(item) => `${item.id}`}
        />
        <TouchableOpacity style={styles.nextBtn}>
          <Text style={styles.btnLabel}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
      <AddNewShopDialog open={openAddNewShopDialog} onClose={toggleAddNewShopDialog} />
    </Layout>
  );
};

export default Shops;
