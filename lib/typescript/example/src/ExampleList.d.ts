/// <reference types="hoist-non-react-statics" />
import * as React from 'react';
import { Theme } from 'react-native-paper';
declare type Props = {
    theme: Theme;
    navigation: any;
};
export declare const examples: {
    [key: string]: any;
};
declare class ExampleList extends React.Component<Props> {
    static navigationOptions: {
        title: string;
    };
    _renderItem: ({ item }: any) => JSX.Element;
    _keyExtractor: (item: {
        id: string;
    }) => string;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "navigation"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../src/types").Theme> | undefined;
}, any> & import("hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof ExampleList) | (React.FunctionComponent<Props> & typeof ExampleList), {}>) | (React.FunctionComponent<Pick<Props, "navigation"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../src/types").Theme> | undefined;
}> & import("hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof ExampleList) | (React.FunctionComponent<Props> & typeof ExampleList), {}>);
export default _default;
