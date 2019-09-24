import * as React from 'react';
import { ImageSourcePropType } from 'react-native';
declare type IconSourceBase = string | ImageSourcePropType;
export declare type IconSource = IconSourceBase | Readonly<{
    source: IconSourceBase;
    direction: 'rtl' | 'ltr' | 'auto';
}> | ((props: IconProps) => React.ReactNode);
declare type IconProps = {
    color: string;
    size: number;
    allowFontScaling?: boolean;
};
declare type Props = IconProps & {
    source: any;
};
export declare const isValidIcon: (source: any) => boolean;
export declare const isEqualIcon: (a: any, b: any) => boolean;
declare const Icon: ({ source, color, size, ...rest }: Props) => any;
export default Icon;
