import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import {colors} from '../themes/colors';
import {spacing} from '../themes/spacing';

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
  inputLabel: {
    fontSize: 14,
    color: colors.gray900,
    marginBottom: spacing(2),
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
  },
  buttonLabel: {
    fontSize: 20,
    color: colors.white,
  },
  forgotPasswordLabel: {
    fontSize: 16,
    color: colors.orange,
  },
});

type LoginCardProps = {
  labels: {
    title: string;
    input: string;
    placeholder: string;
    button: string;
    forgot?: string;
  };
  buttonColor?: string;
  onPressNext?: (value: string) => void;
  onPressForgotPassword?: () => void;
};

const LoginCard: React.FC<LoginCardProps> = ({
  labels,
  onPressNext,
  buttonColor,
  onPressForgotPassword,
}: LoginCardProps) => {
  const [input, setInput] = useState<string>('');

  const handlePress = (): void => {
    if (input && onPressNext) onPressNext(input);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{labels.title}</Text>

      <Text style={styles.inputLabel}>{labels.input}</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder={labels.placeholder}
      />

      <TouchableOpacity
        style={[styles.button, {backgroundColor: buttonColor || colors.blue}]}
        onPress={handlePress}>
        <Text style={styles.buttonLabel}>{labels.button}</Text>
      </TouchableOpacity>

      {onPressForgotPassword && (
        <TouchableOpacity style={styles.button} onPress={onPressForgotPassword}>
          <Text style={styles.forgotPasswordLabel}>{labels.forgot || ''}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LoginCard;
