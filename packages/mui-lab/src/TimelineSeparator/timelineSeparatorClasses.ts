import { generateUtilityClass, generateUtilityClasses } from '@mui/core';

export interface TimelineSeparatorClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type TimelineSeparatorClassKey = keyof TimelineSeparatorClasses;

export function getTimelineSeparatorUtilityClass(slot: string): string {
  return generateUtilityClass('MuiTimelineSeparator', slot);
}

const timelineSeparatorClasses: TimelineSeparatorClasses = generateUtilityClasses(
  'MuiTimelineSeparator',
  ['root'],
);

export default timelineSeparatorClasses;
