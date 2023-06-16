export interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element[];
  header: JSX.Element;
}
