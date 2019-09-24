/// <reference types="hoist-non-react-statics" />
import * as React from 'react';
import { Theme } from 'react-native-paper';
declare type Props = {
    navigation: any;
    theme: Theme;
};
declare class AppbarExample extends React.Component<Props> {
    static title: string;
    static navigationOptions: ({ navigation }: any) => {
        header: JSX.Element;
    };
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "navigation"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}, any> & import("hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof AppbarExample) | (React.FunctionComponent<Props> & typeof AppbarExample), {}>) | (React.FunctionComponent<Pick<Props, "navigation"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}> & import("hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof AppbarExample) | (React.FunctionComponent<Props> & typeof AppbarExample), {}>);
export default _default;
