import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

export function Rectangle11({ width = 393, height = 272 }: { width?: number | string; height?: number | string }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 393 272" fill="none">
      <Defs>
        <LinearGradient id="rect11_gradient" x1="196.5" y1="0" x2="196.5" y2="275.954" gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#002736" />
          <Stop offset="1" stopColor="#06678B" />
        </LinearGradient>
      </Defs>

      <Path
        d="M0 0H393V131.148C393 131.148 334 310.691 282.25 231.808C230.5 152.926 184 231.808 184 231.808C184 231.808 152.5 308.755 98.25 249.714C44 163.572 0 249.714 0 249.714V0Z"
        fill="url(#rect11_gradient)"
      />
    </Svg>
  );
}
