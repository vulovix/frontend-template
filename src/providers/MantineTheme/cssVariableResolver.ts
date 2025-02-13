import { CSSVariablesResolver } from "@mantine/core";

export const cssVariableResolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {},
  dark: {
    "--mantine-color-body": "black", //  "var(--mantine-color-dark-9)",
  },
});
