import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { RoutesEnum } from '@shared/enums';

export interface IMenuDataAccess {
  name: string;
  path: string;
  icon: IconDefinition;
  hasCount?: boolean;
}
