type TUnitSize = `${number}${'px' | '%' | 'em' | 'rem' | 'vw' | 'vh'}`;

interface IBreakpointsMinMax {
  min: TUnitSize;
  max: TUnitSize;
}

export interface IBreakpoints {
  desktop: IBreakpointsMinMax;
  desktopSmall: IBreakpointsMinMax;
  tablet: IBreakpointsMinMax;
  mobile: IBreakpointsMinMax;
  mobileSmall: IBreakpointsMinMax;
}

export interface IColors {
  primary: string;
  secondary: string;
}

export interface IColorsText {
  text: {
    default: string;
    onPrimary: string;
    onSecondary: string;
  };
}

export interface ISizeOnDevice {
  desktop: TUnitSize;
  mobile: TUnitSize;
}

export interface ITheme {
  fontSize: TUnitSize;
  fontWeight: number;
  breakpoints: IBreakpoints;
  colors: IColors & IColorsText;
  header: {
    height: ISizeOnDevice;
  };
  footer: {
    height: ISizeOnDevice;
  };
}
