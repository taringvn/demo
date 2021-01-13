import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, TextInputProps} from 'react-native';

import {colors, spacing} from '../themes';

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
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputLabel: {
    fontSize: 14,
    color: colors.gray900,
    marginBottom: spacing(2),
    fontWeight: 'bold',
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
  helperLabel: {
    fontSize: 16,
  },
});

type LoginCardProps = {
  labels: {
    title: string;
    input: string;
    placeholder: string;
    button: string;
    helper?: string;
  };
  cardColors?: {
    nextBtn?: string;
    helperText?: string;
  };
  textInputProps?: TextInputProps;
  onPressNext?: (value: string) => void;
  onPressHelperLink?: () => void;
};

const LoginCard: React.FC<LoginCardProps> = ({
  labels,
  onPressNext,
  cardColors,
  onPressHelperLink,
  textInputProps,
}: LoginCardProps) => {
  const [input, setInput] = useState<string>('');

  const handlePress = (): void => {
    if (onPressNext) onPressNext(input);
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
        {...textInputProps}
      />

      <TouchableOpacity
        style={[styles.button, {backgroundColor: cardColors?.nextBtn || colors.blue}]}
        onPress={handlePress}>
        <Text style={styles.buttonLabel}>{labels.button}</Text>
      </TouchableOpacity>

      {onPressHelperLink && (
        <TouchableOpacity style={styles.button} onPress={onPressHelperLink}>
          <Text style={[styles.helperLabel, {color: cardColors?.helperText || colors.blue}]}>
            {labels.helper || ''}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LoginCard;
