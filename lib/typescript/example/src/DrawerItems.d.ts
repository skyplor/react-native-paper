/// <reference types="hoist-non-react-statics" />
import * as React from 'react';
import { Theme } from 'react-native-paper';
declare type Props = {
    theme: Theme;
    toggleTheme: () => void;
    toggleRTL: () => void;
    isRTL: boolean;
    isDarkTheme: boolean;
};
declare type State = {
    open: boolean;
    drawerItemIndex: number;
};
declare class DrawerItems extends React.Component<Props, State> {
    state: {
        open: boolean;
        drawerItemIndex: number;
    };
    _setDrawerItem: (index: number) => void;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "toggleTheme" | "toggleRTL" | "isRTL" | "isDarkTheme"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../src/types").Theme> | undefined;
}, any> & import("hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof DrawerItems) | (React.FunctionComponent<Props> & typeof DrawerItems), {}>) | (React.FunctionComponent<Pick<Props, "toggleTheme" | "toggleRTL" | "isRTL" | "isDarkTheme"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../src/types").Theme> | undefined;
}> & import("hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof DrawerItems) | (React.FunctionComponent<Props> & typeof DrawerItems), {}>);
export default _default;
