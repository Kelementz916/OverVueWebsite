import React from "react";
import { DocsLayout } from "../../layouts";
import "../../styles/docs.css";

export default function Installation() {
  return (
    <DocsLayout>
      <div className="docs__content">
        <h2>Installation</h2>
        <p>
          OverVue is compatible with both MacOS and WSL. Quickly install and set up using the quickstart guide for your operating system below. To try out the development version of OverVue, head over to our <a href="https://github.com/open-source-labs/OverVue">Github page</a> on how to get started.
        </p>
        <h3>Installation Instructions</h3>
        <p>1. Download the desktop App for <a href="https://github.com/open-source-labs/OverVue/releases/download/v8.0.0/OverVue-8.0.0-darwin-universal.zip">MacOS</a> or <a href="https://github.com/open-source-labs/OverVue/releases/download/v8.0.0/OverVue-8.0.0-linux-x64.zip">Linux</a>.</p>
        <p>2. Extract folder.</p>
        <p>3. Run OverVue.exe.</p>​
      </div>
    </DocsLayout>
  );
}