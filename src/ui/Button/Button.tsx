import Loader from '../../components/Loader/Loader';
import './button.css';
import { IButton } from './buttonTypes';

function Button({
  type,
  handeClick,
  handeKeyDown,
  isDisabled,
  isLoading,
  buttonType,
  children,
}: IButton) {
  return (
    <button
      /* eslint-disable-next-line react/button-has-type */
      type={type}
      onClick={handeClick}
      onKeyDown={handeKeyDown}
      className={buttonType}
      disabled={isDisabled}
    >
      {children}
      {isLoading && <Loader size="small" />}
    </button>
  );
}

export default Button;
