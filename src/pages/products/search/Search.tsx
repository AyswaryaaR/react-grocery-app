import Input from "../../../components/input/Input";

export interface ISearchProps {
  searchText: string;
  onSearch: (value: string) => void;
}

const Search = ({ searchText, onSearch }: ISearchProps) => {
  return (
    <>
      <Input
        value={searchText}
        onChange={(event) => onSearch(event.target.value)}
        placeholder="Search"
      />
    </>
  );
};

export default Search;
