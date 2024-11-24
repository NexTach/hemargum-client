import MainLogo from './mainLogoSvg';
import { useNavigate } from 'react-router-dom';

function Logo() {
  const go = useNavigate();
  return (
    <div onClick={() => go('/')}>
      <MainLogo />
    </div>
  );
}

export default Logo;
