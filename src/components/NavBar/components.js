import styled from 'styled-components'
// NavBar components

export const Wrapper = styled.ul`
  top: 0;
  left: 0;
  right: 0;
  height: ${props => props.theme.navBarHeight};
  display: flex;
  align-items: center;
  position: fixed;
  background-color: ${props => props.theme.mainDarkColor};
`

export const Spacer = styled.div`
  width: '100%';
  height: ${props => props.theme.navBarHeight};
`

export const Logo = styled.img`
  height: 30px;
  padding: 0 10px;
`
