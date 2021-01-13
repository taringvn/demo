import {StyleSheet} from 'react-native';

import colors from './colors';
import spacing from './spacing';

export default StyleSheet.create({
  header: {
    fontSize: 20,
    color: colors.blue900,
    marginBottom: spacing(2),
    textAlign: 'center',
    fontWeight: 'bold',
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
    fontSize: 20,
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
