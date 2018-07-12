import Elm, { ElmDocument, ElmElement, ElmSandbox, ElmPort } from "elm-0-18";
import ElmComponent from "react-elm-components";

// We need to augment the empty "ElmStatic" interface with the 
// application specific Elm apps
declare module "elm-0-18" {

    interface ElmStatic {
        DocumentApp: ElmDocument<Flags, Ports>;
        ElementApp: ElmElement<Flags>;
        SandboxApp: ElmSandbox;
        // Add more apps...
    }

}

interface Flags {
    setting: Boolean;
}

interface Ports {
    toElm: ElmPort<Boolean>;
}

// Basic Elm usage without React

const root = document.querySelector("#root");

if (root) {
    const sandboxApp = Elm.SandboxApp.embed(root);

    const elementApp = Elm.ElementApp.fullscreen({
        setting: true,
    });

    const docApp = Elm.DocumentApp.fullscreen({ setting: false });
    docApp.ports.toElm.send(false);
}


// ElmComponent generic React wrapper (TS2.9+)

const setupPorts = (ports: Ports) => {
    ports.toElm.subscribe(setting => {
        console.log("setting", setting);
    });
};

const render = () => (
    <ElmComponent<Flags, Ports>
        flags={{ setting: true }}
        ports={setupPorts}
        src={Elm.DocumentApp}
    />
);
