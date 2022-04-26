/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['index']
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations/telegram',
        'integrations/discord',
        'integrations/webhooks',
        'integrations/slack'
      ],
    },
  ]
};

module.exports = sidebars;
