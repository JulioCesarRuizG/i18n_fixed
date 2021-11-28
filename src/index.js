import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import spanish from "./locales/languages/es";
import english from "./locales/languages/en";

import JobsList from "./components/jobslist";

var languaje = "";
var local = "";
if (navigator.language === "es-ES") {
  languaje = spanish;
  local = "es-co";
} else {
  languaje = english;
  local = "en-us";
}

ReactDOM.render(
  <IntlProvider locale={local} messages={languaje}>
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);
