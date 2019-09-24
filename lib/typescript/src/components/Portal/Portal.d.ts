/// <reference types="hoist-non-react-statics" />
import * as React from 'react';
import PortalHost from './PortalHost';
import { Theme } from '../../types';
declare type Props = {
    /**
     * Content of the `Portal`.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: Theme;
};
/**
 * Portal allows to render a component at a different place in the parent tree.
 * You can use it to render content which should appear above other elements, similar to `Modal`.
 * It requires a [`Portal.Host`](portal-host.html) component to be rendered somewhere in the parent tree.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Portal, Text } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   render() {
 *     return (
 *       <Portal>
 *         <Text>This is rendered at a different place</Text>
 *       </Portal>
 *     );
 *   }
 * }
 * ```
 */
declare class Portal extends React.Component<Props> {
    static Host: typeof PortalHost;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, "children"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}, any> & import("hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof Portal) | (React.FunctionComponent<Props> & typeof Portal), {}>) | (React.FunctionComponent<Pick<Props, "children"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof Portal) | (React.FunctionComponent<Props> & typeof Portal), {}>);
export default _default;
