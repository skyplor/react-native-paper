/// <reference types="hoist-non-react-statics" />
import * as React from 'react';
import { Theme } from 'react-native-paper';
declare type Props = {
    theme: Theme;
};
declare type State = {
    expandedId: string | number | undefined;
};
declare class ListAccordionGroupExample extends React.Component<Props, State> {
    static title: string;
    state: {
        expandedId: undefined;
    };
    _onAccordionPress: (expandedId: React.ReactText) => void;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}, any> & import("hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof ListAccordionGroupExample) | (React.FunctionComponent<Props> & typeof ListAccordionGroupExample), {}>) | (React.FunctionComponent<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}> & import("hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof ListAccordionGroupExample) | (React.FunctionComponent<Props> & typeof ListAccordionGroupExample), {}>);
export default _default;
