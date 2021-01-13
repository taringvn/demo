import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, TextInputProps} from 'react-native';

import {colors, commonStyles, spacing} from '../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: spacing(2),
    borderRadius: spacing(1),
  },
  inputLabel: {
    fontSize: 14,
    color: colors.gray900,
    marginBottom: spacing(2),
    fontWeight: 'bold',
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
      <Text style={commonStyles.header}>{labels.title}</Text>

      <Text style={styles.inputLabel}>{labels.input}</Text>
      <TextInput
        style={commonStyles.input}
        value={input}
        onChangeText={setInput}
        placeholder={labels.placeholder}
        {...textInputProps}
      />

      <TouchableOpacity
        style={[commonStyles.button, {backgroundColor: cardColors?.nextBtn || colors.blue}]}
        onPress={handlePress}>
        <Text style={commonStyles.buttonLabel}>{labels.button}</Text>
      </TouchableOpacity>

      {onPressHelperLink && (
        <TouchableOpacity style={commonStyles.button} onPress={onPressHelperLink}>
          <Text style={[styles.helperLabel, {color: cardColors?.helperText || colors.blue}]}>
            {labels.helper || ''}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LoginCard;
