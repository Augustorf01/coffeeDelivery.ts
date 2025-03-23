import { css } from 'styled-components';

export const theme = {
  colors: {
    yellowDark: '#C47F17',
    yellow: '#DBAC2C',
    yellowLight: '#F1E9C9',
    purpleDark: '#4B2995',
    purple: '#8047F8',
    purpleLight: '#EBE5F9',
    baseTitle: '#272221',
    baseSubtitle: '#403937',
    baseText: '#574F4D',
    baseLabel: '#8D8686',
    baseHover: '#D7D5D5',
    baseButton: '#E6E5E5',
    baseInput: '#EDEDED',
    baseCard: '#F3F2F2',
    background: '#FAFAFA',
    white: '#FFFFFF',
  },
  
  fonts: {
    baloo: "'Baloo 2', cursive",
    roboto: "'Roboto', sans-serif",
  },
  
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1200px',
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  
  borderRadius: {
    default: '6px',
    card: '0 3rem',
    pill: '3rem',
  },
};

// Media Queries
export const media = {
  mobile: (styles: TemplateStringsArray, ...interpolations: string[]) => css`
    @media (max-width: ${theme.breakpoints.mobile}) {
      ${css(styles, ...interpolations)}
    }
  `,
  tablet: (styles: TemplateStringsArray, ...interpolations: string[]) => css`
    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme.breakpoints.tablet}) {
      ${css(styles, ...interpolations)}
    }
  `,
  laptop: (styles: TemplateStringsArray, ...interpolations: string[]) => css`
    @media (min-width: ${theme.breakpoints.tablet}) and (max-width: ${theme.breakpoints.laptop}) {
      ${css(styles, ...interpolations)}
    }
  `,
  desktop: (styles: TemplateStringsArray, ...interpolations: string[]) => css`
    @media (min-width: ${theme.breakpoints.laptop}) and (max-width: ${theme.breakpoints.desktop}) {
      ${css(styles, ...interpolations)}
    }
  `,
  largeDesktop: (styles: TemplateStringsArray, ...interpolations: string[]) => css`
    @media (min-width: ${theme.breakpoints.desktop}) {
      ${css(styles, ...interpolations)}
    }
  `,
  
  // Reusable responsive rules
  belowTablet: (styles: TemplateStringsArray, ...interpolations: string[]) => css`
    @media (max-width: ${theme.breakpoints.tablet}) {
      ${css(styles, ...interpolations)}
    }
  `,
  aboveTablet: (styles: TemplateStringsArray, ...interpolations: string[]) => css`
    @media (min-width: ${theme.breakpoints.tablet}) {
      ${css(styles, ...interpolations)}
    }
  `,
};

// Responsive container mixins
export const container = css`
  width: 100%;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  
  ${media.mobile`
    max-width: 100%;
  `}
  
  ${media.tablet`
    max-width: 720px;
  `}
  
  ${media.laptop`
    max-width: 960px;
  `}
  
  ${media.desktop`
    max-width: 1140px;
  `}
  
  ${media.largeDesktop`
    max-width: 1320px;
  `}
`;

// Flex utility mixins
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

// Common UI patterns
export const card = css`
  background-color: ${theme.colors.baseCard};
  border-radius: ${theme.borderRadius.default};
  padding: ${theme.spacing.lg};
`;

export const buttonBase = css`
  border: none;
  border-radius: ${theme.borderRadius.default};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  font-family: ${theme.fonts.roboto};
  cursor: pointer;
  transition: background-color 0.2s ease;
`;

export default theme;