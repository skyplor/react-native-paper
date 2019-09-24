/// <reference types="hoist-non-react-statics" />
import * as React from 'react';
import { Theme } from 'react-native-paper';
declare type Props = {
    theme: Theme;
};
declare type State = {
    expanded: boolean;
};
declare class ListAccordionExample extends React.Component<Props, State> {
    static title: string;
    state: {
        expanded: boolean;
    };
    _handlePress: () => void;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}, any> & import("hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof ListAccordionExample) | (React.FunctionComponent<Props> & typeof ListAccordionExample), {}>) | (React.FunctionComponent<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}> & import("hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof ListAccordionExample) | (React.FunctionComponent<Props> & typeof ListAccordionExample), {}>);
export default _default;
