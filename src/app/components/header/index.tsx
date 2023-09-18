import { TextInput, Text } from "@ui";
import { Header as StyledHeader } from "./styles";
import { LabelFilter } from "./components";
import { LabelType } from "@data";

type HeaderProps = {
  labels: LabelType[];
  searchValue: string;
  labelFilters: string[];
  handleLabelSelect: (id: string) => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header = ({
  labels,
  labelFilters,
  searchValue,
  handleSearchChange,
  handleLabelSelect,
}: HeaderProps) => {

  return (
    <StyledHeader>
      <Text weight={700} size={24} color="#fff">Tasks Manager</Text>
      <LabelFilter
        labels={labels}
				labelFilters={labelFilters}
        handleLabelSelect={handleLabelSelect}
      />
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
