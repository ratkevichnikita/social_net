export interface IButton {
  type: 'button' | 'submit' | 'reset';
  handeClick: () => void;
  handeKeyDown?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  buttonType: 'default' | 'secondary';
  children: string;
}
