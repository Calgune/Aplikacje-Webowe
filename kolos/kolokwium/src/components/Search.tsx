interface SearchProps {
  value: string;
  onChange: (val: string) => void;
}

function Search({ value, onChange }: SearchProps) {
  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Search;