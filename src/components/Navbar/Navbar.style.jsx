import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  position: relative;
  top: 0;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 4rem;
  z-index: 99;
`;

export const NavbarBrand = styled.div`
  > img {
    height: 40px;
  }
`;

export const NavbarListWrapper = styled.div`
  flex-grow: 0.2;
`;

export const NavbarList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const NavbarListItem = styled.li`
  font-size: 0.8rem;
  position: relative;
  padding-bottom: 2px;
  list-style: none;
  cursor: pointer;
  color: var(--white);

  background: ${(props) =>
    props.active ? "var(--button-light)" : "transparent"};
  font-weight: ${(props) => (props.active ? "800" : "400")};
  border-radius: ${(props) => (props.active ? "1.5rem" : "")};
  padding: ${(props) => (props.active ? "0.5rem 1rem" : "")};
  margin-top: ${(props) => (props.active ? "-0.3rem" : "")};
  backdrop-filter: blur(4px);

  &:hover {
    font-weight: 800;
  }
`;

export const NavbarListSettings = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 0.2;
`;

export const NavbarListSettingsItem = styled.div`
  color: var(--white);
  margin-right: 1rem;
`;
