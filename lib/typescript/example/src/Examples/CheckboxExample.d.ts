/// <reference types="hoist-non-react-statics" />
import * as React from 'react';
import { Theme } from 'react-native-paper';
declare type Props = {
    theme: Theme;
};
declare type State = {
    checkedNormal: boolean;
    checkedCustom: boolean;
    indeterminate: boolean;
};
declare class CheckboxExample extends React.Component<Props, State> {
    static title: string;
    state: {
        checkedNormal: boolean;
        checkedCustom: boolean;
        indeterminate: boolean;
    };
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}, any> & import("hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof CheckboxExample) | (React.FunctionComponent<Props> & typeof CheckboxExample), {}>) | (React.FunctionComponent<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}> & import("hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof CheckboxExample) | (React.FunctionComponent<Props> & typeof CheckboxExample), {}>);
export default _default;
