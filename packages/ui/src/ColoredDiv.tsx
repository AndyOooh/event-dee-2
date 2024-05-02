import { colorMap } from './utils/brandColors'
import { ThemeColors } from 'event-dee-types'

type ColoredDivProps = {
    children?: React.ReactNode
    width?: number
    height?: number
    color?: ThemeColors
    direction?: 'bottom' | 'top' | 'left' | 'right'
    skew?: [number, number]
    rotateY?: number
    rotateX?: number
    rotateZ?: number
    className?: string
    // fromColor?: string;
    // toColor?: string;
}

/* Maybe we can remove w and h and always wrap in divs instead? */

export const ColoredDiv = ({
    children,
    width,
    height,
    color = 'orange',
    direction = 'top',
    skew = [0, 0],
    rotateY = 0,
    rotateX = 0,
    rotateZ = 0,
    className,
}: ColoredDivProps) => {
    const hexColor = colorMap[color as keyof typeof colorMap]
    const calcWidth = width ? `${width}rem` : '100%'
    const calcHeight = height ? `${height}rem` : '100%'

    return (
        <div
            className={`${className} rounded-3xl -z-50`}
            style={{
                transform: `skew(${skew[0]}deg, ${skew[1]}deg) rotateY(${rotateY}deg) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`,
                width: calcWidth,
                height: calcHeight,
                background: `linear-gradient(to ${direction}, ${hexColor}80, ${hexColor}10`,
            }}
        >
            {children}
        </div>
    )
}
