
declare module "elm-0-18" {

    export interface ElmPort<T> {
        send(data: T): void;
        subscribe(subscription: (data: T) => void): void;
    }

    export interface ElmApp { }

    export interface ElmAppDocument<Ports> extends ElmApp {
        ports: Ports;
    }

    export interface ElmAppElement extends ElmApp {
    }

    export interface ElmAppSandbox extends ElmApp {
    }

    export interface ElmDocument<Flags, Ports> {
        embed(root: Element, flags: Flags): ElmAppDocument<Ports>;
        fullscreen(flags: Flags): ElmAppDocument<Ports>;
    }

    export interface ElmElement<Flags> {
        embed(root: Element, flags: Flags): ElmAppElement;
        fullscreen(flags: Flags): ElmAppElement;
    }

    export interface ElmSandbox {
        embed(root: Element): ElmAppSandbox;
    }

    export interface ElmStatic { }

    const Elm: ElmStatic;
    export default Elm;
}

declare module "react-elm-components" {
    import "react";
    import { ElmDocument } from "elm-0-18";

    export interface Props<Flags, Ports> {
        flags?: Flags;
        ports?: (ports: Ports) => void;
        src: ElmDocument<Flags, Ports>;
    }

    export class ElmComponent<Flags, Ports> extends React.PureComponent<Props<Flags, Ports>> {
    }

    export default ElmComponent;
}