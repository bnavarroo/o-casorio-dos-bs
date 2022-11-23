import { TCssSize } from '@shared/types/_globals';

export interface IProps {
  widthDesktop?: TCssSize;
  widthMobile?: TCssSize;
}

export interface IStyledWrapperProps {
  $widthDesktop: TCssSize;
  $widthMobile: TCssSize;
}
