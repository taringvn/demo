import {StyleSheet} from 'react-native';

import colors from './colors';
import spacing from './spacing';

export default StyleSheet.create({
  header: {
    color: colors.blue900,
    marginBottom: spacing(2),
    textAlign: 'center',
  },
  button: {
    borderRadius: 3,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing(2),
    padding: spacing(1),
  },
  buttonLabel: {
    color: colors.white,
  },
  input: {
    backgroundColor: colors.gray100,
    borderWidth: 1,
    width: '100%',
    height: 40,
    borderColor: colors.gray200,
    borderRadius: spacing(0.5),
  },
});
