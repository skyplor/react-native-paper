/// <reference types="hoist-non-react-statics" />
import * as React from 'react';
import { Theme } from 'react-native-paper';
declare type Props = {
    theme: Theme;
};
declare type State = {
    page: number;
    sortAscending: boolean;
    items: Array<{
        key: number;
        name: string;
        calories: number;
        fat: number;
    }>;
};
declare class DataTableExample extends React.Component<Props, State> {
    static title: string;
    state: {
        page: number;
        sortAscending: boolean;
        items: {
            key: number;
            name: string;
            calories: number;
            fat: number;
        }[];
    };
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}, any> & import("hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof DataTableExample) | (React.FunctionComponent<Props> & typeof DataTableExample), {}>) | (React.FunctionComponent<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}> & import("hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof DataTableExample) | (React.FunctionComponent<Props> & typeof DataTableExample), {}>);
export default _default;
