/// <reference types="hoist-non-react-statics" />
import * as React from 'react';
import { Theme } from 'react-native-paper';
declare type Props = {
    theme: Theme;
};
declare type State = {
    text: string;
    name: string;
    outlinedText: string;
    largeText: string;
    outlinedLargeText: string;
    nameNoPadding: string;
    flatDenseText: string;
    flatDense: string;
    outlinedDenseText: string;
    outlinedDense: string;
    flatMultiline: string;
    flatTextArea: string;
    outlinedMultiline: string;
    outlinedTextArea: string;
    maxLengthName: string;
};
declare class TextInputExample extends React.Component<Props, State> {
    static title: string;
    state: {
        text: string;
        name: string;
        outlinedText: string;
        largeText: string;
        outlinedLargeText: string;
        nameNoPadding: string;
        flatDenseText: string;
        flatDense: string;
        outlinedDenseText: string;
        outlinedDense: string;
        flatMultiline: string;
        flatTextArea: string;
        outlinedMultiline: string;
        outlinedTextArea: string;
        maxLengthName: string;
    };
    _isUsernameValid: (name: string) => boolean;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}, any> & import("hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof TextInputExample) | (React.FunctionComponent<Props> & typeof TextInputExample), {}>) | (React.FunctionComponent<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}> & import("hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof TextInputExample) | (React.FunctionComponent<Props> & typeof TextInputExample), {}>);
export default _default;
