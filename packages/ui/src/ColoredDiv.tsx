import { colorMap } from './utils/colorMap';

type ColoredDivProps = {
  width?: string;
  height?: string;
  color?:
    | 'white'
    | 'black'
    | 'beige'
    | 'red'
    | 'green'
    | 'blue'
    | 'pink'
    | 'orange'
    | 'purple'
    | 'darkPink';
  direction?: 'bottom' | 'top' | 'left' | 'right';
  skew?: [number, number]
  // fromColor?: string;
  // toColor?: string;
  // className?: string;
};

export const ColoredDiv = ({
  width = '12',
  height = '8',
  color = 'orange',
  direction = 'top',
  skew =  [15, 10]
}: ColoredDivProps) => {
  const hexColor = colorMap[color as keyof typeof colorMap];
  return (
    <div
      className={`rounded-xl`}
      style={{
        background: `linear-gradient(to ${direction}, ${hexColor}80, ${hexColor}10`,
        transform: `skew(${skew[0]}deg, ${skew[1]}deg) rotateY(40deg) rotateX(10deg)`,
        width: `${width}rem`,
        height: `${height}rem`,
      }}
    />
  );
};
