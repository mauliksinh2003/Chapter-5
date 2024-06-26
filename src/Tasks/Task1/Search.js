import { useSearchParams } from 'react-router-dom';
import Framermotion from './Framermotion';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const handleSearch = (event) => {
    event.preventDefault();
    const searchQuery = event.target.elements.search.value;
    setSearchParams({ q: searchQuery });
  };

  const results = query ? `Displaying results for "${query}"` : 'No search query entered';

  return (
    <Framermotion>
    <div>
      <h2>Search Page</h2>
      <form onSubmit={handleSearch}>
        <input type="text" name="search" defaultValue={query} placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
      <div>
        <h3>Results</h3>
        <p>{results}</p>
      </div>
    </div>
    </Framermotion>
  );
}

export default Search;
