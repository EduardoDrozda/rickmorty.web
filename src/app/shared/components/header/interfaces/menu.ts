import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface IMenu {
  name: string;
  path: string;
  icon: IconDefinition;
  hasCount?: boolean;
}
