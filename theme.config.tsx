import React from 'react';
import type { ThemeConfigProps } from 'nextra-theme-docs';

const config: ThemeConfigProps = {
  logo: <>My Docs</>,
  project: { link: 'https://github.com/your/repo' },
  docsRepositoryBase: 'https://github.com/your/repo/blob/main',
  footer: { text: '© 2024 My Company' },
};

export default config;