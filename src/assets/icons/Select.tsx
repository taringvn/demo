import React from 'react';
import Svg, {SvgProps, Path, G, Defs, ClipPath} from 'react-native-svg';

const SelectIcon: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={36} height={36} viewBox="0 0 36 36" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z"
        fill="#2E7CD9"
      />
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M14.54 23.456l-3.968-3.97a1.957 1.957 0 010-2.772 1.96 1.96 0 012.77 0l2.487 2.484a.268.268 0 00.377 0l6.445-6.446a1.96 1.96 0 012.772 2.771l-7.931 7.933a2.087 2.087 0 01-2.951 0z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" transform="translate(10 10)" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default SelectIcon;
