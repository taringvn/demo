import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const HideIcon: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path fill="#fff" d="M0 0h32v32H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 16.586c4.974 9 13.026 9 18 0-4.974-9-13.026-9-18 0zm9 2.764a2.765 2.765 0 110-5.53 2.765 2.765 0 010 5.53z"
        fill="#969696"
      />
      <Path
        d="M21.435 9.293a1 1 0 111.414 1.414L10.121 23.435a1 1 0 11-1.414-1.414L21.435 9.293z"
        fill="#969696"
      />
    </Svg>
  );
};

export default HideIcon;
