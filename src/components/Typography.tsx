import React from 'react';
import {TextProps, Text, StyleSheet} from 'react-native';

interface TypographyProps extends TextProps {
  variant?: 'h5' | 'h6' | 'h7' | 'b5';
  children: React.ReactNode;
}

const styles = StyleSheet.create({
  root: {
    fontFamily: 'NunitoSans-Regular',
  },
  h5: {
    fontWeight: '700',
    fontSize: 20,
  },
  h6: {
    fontSize: 16,
  },
  h7: {
    fontWeight: '700',
    fontSize: 14,
  },
  b5: {
    fontWeight: '600',
    fontSize: 14,
  },
});

export default function Typography({variant, style, children, ...props}: TypographyProps) {
  const variantStyle = variant ? styles[variant] : {};
  return (
    <Text {...props} style={[styles.root, variantStyle, style]}>
      {children}
    </Text>
  );
}
