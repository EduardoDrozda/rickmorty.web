import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { RoutesEnum } from '@shared/enums';

export interface IMenu {
  name: string;
  path: string;
  icon: IconDefinition;
  hasCount?: boolean;
}
