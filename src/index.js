import React from "react";
import ReactDOMServer from "react-dom/server";
import { Default } from "./layouts";
import * as fs from "fs";

const HtmlStream = fs.createWriteStream("./home.html");

ReactDOMServer.renderToNodeStream(React.createElement(Default)).pipe(
  HtmlStream
);
