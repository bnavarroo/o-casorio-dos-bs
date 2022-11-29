import { TCssSize } from '@shared/types/_globals';

export interface IPropsInput {
  $allBorders?: boolean;
  $borderColor?: `#${string}` | 'transparent';
}

export interface IPropsInputWrapperButton {
  $width?: TCssSize;
  $borderColor?: `#${string}` | 'transparent';
}
