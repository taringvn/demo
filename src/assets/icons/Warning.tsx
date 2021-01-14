import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const WarningIcon: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={36} height={32} viewBox="0 0 36 32" fill="none" {...props}>
      <Path
        d="M21.268 2.279l14.218 23.778a3.6 3.6 0 01-1.376 4.996 3.888 3.888 0 01-1.893.491H3.777A3.718 3.718 0 010 27.89c.002-.646.18-1.28.514-1.833L14.732 2.279a3.857 3.857 0 015.16-1.332c.567.317 1.041.776 1.376 1.332zM18 28.227a2.81 2.81 0 100-5.622 2.81 2.81 0 000 5.622zM18 8.03a3.31 3.31 0 00-3.284 3.716l1.178 6.466a2.121 2.121 0 004.212 0l1.178-6.467A3.31 3.31 0 0018 8.028z"
        fill="#FF881B"
      />
    </Svg>
  );
};

export default WarningIcon;
