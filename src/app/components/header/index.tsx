import { TextInput, Text } from "@ui";
import { Header as StyledHeader } from "./styles";

type HeaderProps = {
  searchValue: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Header = ({ searchValue, handleSearchChange }: HeaderProps) => {

  return (
    <StyledHeader>
      <Text weight={700} size={24} color="#fff">Tasks Manager</Text>
      <TextInput 
        value={searchValue}
        onChange={handleSearchChange}
        className="searchInput"
        placeholder="Search for event"
      />
      <Text className="label" size={10} color="#fff">
        Made by <a href="https://github.com/Yhuley" target="_blank">@Yhuley</a>
      </Text>
    </StyledHeader>
  )
}

export default Header;
