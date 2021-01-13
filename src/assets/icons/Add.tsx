import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const AddIcon: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M8 3.333v9.334M3.333 8h9.333"
        stroke="#969696"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default AddIcon;
