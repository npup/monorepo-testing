import { createRoot } from "react-dom/client";
import "css-to-go";
import { App } from "./App";

const appRootSelector = ".app";

const domRoot = document.querySelector(appRootSelector);
if (domRoot) {
    const appRoot = createRoot(domRoot);
    appRoot.render(<App />);
} else {
    throw Error(
        `Kunde ej starta app i elementet för selektor [${appRootSelector}]`
    );
}
