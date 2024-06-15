import { APP_ICONS } from '@shared/components/font';

export interface IMenu {
  name: string;
  path: string;
  icon: keyof typeof APP_ICONS;
  hasCount?: boolean;
}
