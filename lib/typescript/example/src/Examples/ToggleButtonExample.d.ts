/// <reference types="hoist-non-react-statics" />
import * as React from 'react';
import { Theme } from 'react-native-paper';
declare type Props = {
    theme: Theme;
};
declare type State = {
    first: string;
    second: string;
    fruit: string;
    status: 'checked' | 'unchecked';
};
declare class ToggleButtonExample extends React.Component<Props, State> {
    static title: string;
    state: State;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}, any> & import("hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof ToggleButtonExample) | (React.FunctionComponent<Props> & typeof ToggleButtonExample), {}>) | (React.FunctionComponent<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}> & import("hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof ToggleButtonExample) | (React.FunctionComponent<Props> & typeof ToggleButtonExample), {}>);
export default _default;
