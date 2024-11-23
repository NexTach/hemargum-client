import styled from 'styled-components';
import LanguageChange from '../assets/LanguangeChange';
import Logo from '../assets/Logo';

const HeaderWrapper = styled.div`
  height: 64px;
  width: 100vw;
  background-color: rgba(68, 190, 118, 1);
  display: flex;
  align-items: center;
`;

const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 802px;
`;

const Text = styled.p`
  color: var(--White, #fafafa);
  text-shadow: 1px 2px 0px rgba(101, 75, 139, 0.24);
  font-family: GangwonEduPower;
  font-size: 24px;
  font-style: normal;
  font-weight: bolder;
  line-height: normal;
  margin-left: 41px;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <SvgWrapper>
        <LanguageChange />
        <Text>Sign In</Text>
      </SvgWrapper>
    </HeaderWrapper>
  );
}

export default Header;
