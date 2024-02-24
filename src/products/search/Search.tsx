export interface ISearchProps {
  searchText: string;
  onSearch: (value: string) => void;
}

const Search = ({ searchText, onSearch }: ISearchProps) => {
  return (
    <>
      <input
        value={searchText}
        onChange={(event) => onSearch(event.target.value)}
      />
    </>
  );
};

export default Search;
