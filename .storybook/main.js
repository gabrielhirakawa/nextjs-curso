module.exports = {
  stories: [
    '../src/components/**/stories.tsx'
    //  "../src/**/*.stories.mdx",
    //"../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs/register'
  ]
}
