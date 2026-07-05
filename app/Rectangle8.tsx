import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

export function Rectangle8({ width = 393, height = 281 }: { width?: number | string; height?: number | string }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 393 281.026" fill="none">
      <Defs>
        <LinearGradient id="rect8_gradient" x1="196.5" y1="0" x2="196.5" y2="285.111" gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#002736" />
          <Stop offset="1" stopColor="#06678B" />
        </LinearGradient>
      </Defs>

      <Path
        d="M0 0H393V135.5C393 135.5 334 321 282.25 239.5C230.5 158 184 239.5 184 239.5C184 239.5 152.5 319 98.25 258C44 169 0 258 0 258V0Z"
        fill="url(#rect8_gradient)"
      />
    </Svg>
  );
}
