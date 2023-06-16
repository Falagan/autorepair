import { LANGUAGES } from '../../../../shared/models/languages';
import { THEMES } from '../../../../shared/models/themes';
export interface HeaderProps {
  children: JSX.Element[];
  title: JSX.Element;
  onSwitchLang: (lang: LANGUAGES) => void;
  onSwitchTheme: (theme: THEMES) => void;
  onToggleSideMenu: () => void;
  onToggleColorThemeMode: () => void;
}
