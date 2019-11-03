import React from "react";
import { default as mousetrap } from "./resources/mousetrap.min";
import { secret } from "./secret";

export const onInitialClientRender = (
  _,
  {
    sequence = "up up down down left right left right b a enter",
    debug = false
  }
) => {
  mousetrap.bind(sequence, () => {
    secret();
  });

  if (debug) {
    // expose the hidden functionality on the `window`
    window.gatsbyPluginEasterEgg = secret;

    // report to the console - a lot
    console.group(
      `%cplugin-gatsby-easter-egg \n%c💜🔌🐰🥚 %cdebug: %c${debug}`,
      `font-size: 18px; font-weight: bold; text-shadow: 1px 1px 0 #eee, 2px 2px 0 #111;`,
      `font-size: 16px; padding: 0.75em 0 0 0; letter-spacing: 13px;`,
      `color: red;`,
      `color: red; font-variant: small-caps;`
    );
    console.log(
      `%csequence: %c${sequence}`,
      `font-weight: bold; font-variant: small-caps;`,
      `font-style: italic;`
    );
    console.log(
      `%csecret function demo:%c Run %c\`window.gatsbyPluginEasterEgg()\`%c in the console to run the secret function to validate it is working as intended`,
      `font-weight: bold; font-variant: small-caps;`, // tip
      ``,
      `font-family: monospace;`, // code
      ``
    );
    console.groupCollapsed(
      `%csecret function:`,
      `font-weight: bold; font-variant: small-caps;`
    );
    console.log(
      `%c${secret}`,
      `font-style: italic;font-family: monospace;` // code
    );
    console.groupEnd();
    console.groupEnd();
  }
};
