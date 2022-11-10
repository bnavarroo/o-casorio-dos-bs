import { ITheme } from './types';

const Theme: Readonly<ITheme> = {
  fontSize: '14px',
  fontWeight: 400,
  breakpoints: {
    desktop: { min: '1200px', max: '100vw' },
    desktopSmall: { min: '1024px', max: '1199.98px' },
    tablet: { min: '640px', max: '1023.98px' },
    mobile: { min: '375px', max: '639.98px' },
    mobileSmall: { min: '0px', max: '374.98px' },
  },
  colors: {
    primary: '#367d60',
    secondary: '#c7b189',
    tertiary: '#9ab9ad',
    text: {
      default: '#564d37',
      onPrimary: '#FFF',
      onSecondary: '#000',
      onTertiary: '#FFF',
    },
  },
  header: {
    height: {
      desktop: '265px',
      mobile: '215px',
    },
  },
  footer: {
    height: {
      desktop: '48px',
      mobile: '74px',
    },
  },
};

export default Theme;
