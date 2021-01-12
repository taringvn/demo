import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const PieIcon: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={54} height={54} viewBox="0 0 54 54" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 54c14.912 0 27-12.088 27-27S41.912 0 27 0 0 12.088 0 27s12.088 27 27 27zm0-11.571c8.521 0 15.429-6.908 15.429-15.429S35.52 11.571 27 11.571 11.571 18.48 11.571 27 18.48 42.429 27 42.429z"
        fill="#2E7CD9"
      />
    </Svg>
  );
};

export default PieIcon;
