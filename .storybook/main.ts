import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
  ],
  // core: {
  //   builder: "webpack5",
  // },
  // async viteFinal(config) {
  //   // Merge custom configuration into the default config
  //   const { mergeConfig } = await import("vite");

  //   return mergeConfig(config, {
  //     // Add dependencies to pre-optimization
  //     optimizeDeps: {
  //       include: ["storybook-dark-mode"],
  //     },
  //   });
  // },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
