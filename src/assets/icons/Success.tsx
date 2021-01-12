import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SuccessIcon: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={36} height={28} viewBox="0 0 36 28" fill="none" {...props}>
      <Path
        d="M10.216 26.276l-8.93-8.933a4.407 4.407 0 013.118-7.526c1.169 0 2.29.464 3.118 1.29l5.592 5.588a.602.602 0 00.849 0L28.466 2.192a4.412 4.412 0 017.528 3.118 4.408 4.408 0 01-1.292 3.118L16.856 26.276a4.695 4.695 0 01-6.64 0z"
        fill="#42AB44"
      />
    </Svg>
  );
};

export default SuccessIcon;
