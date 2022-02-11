import {
  NavbarWrapper,
  NavbarBrand,
  NavbarListWrapper,
  NavbarList,
  NavbarListItem,
  NavbarListSettings,
  NavbarListSettingsItem,
} from "./Navbar.style";
import { VscBellDot } from "react-icons/vsc";
import { BsSearch } from "react-icons/bs";
import { RiSettings3Line } from "react-icons/ri";

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarBrand>
        <img src="https://ahlulbayt.co.uk/home/assets/images/logo-small-white-192x117.png" />
      </NavbarBrand>
      <NavbarListWrapper>
        <NavbarList>
          <NavbarListItem active>Home</NavbarListItem>
          <NavbarListItem>Catalog</NavbarListItem>
          <NavbarListItem>Countries</NavbarListItem>
          <NavbarListItem>Languages</NavbarListItem>
        </NavbarList>
      </NavbarListWrapper>
      <NavbarListSettings>
        <NavbarListSettingsItem>
          <VscBellDot />
        </NavbarListSettingsItem>
        <NavbarListSettingsItem>
          <BsSearch />
        </NavbarListSettingsItem>
        <NavbarListSettingsItem>
          <RiSettings3Line />
        </NavbarListSettingsItem>
      </NavbarListSettings>
    </NavbarWrapper>
  );
};
