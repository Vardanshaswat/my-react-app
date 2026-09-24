import { useEffect, useState } from 'react';

function UserSearch() {
  const [search,setSearch] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');



  useEffect(() => {
    if (search.trim() === '') {
      setUsers([]);
      setError('');
      setLoading(false);
      return undefined;
    }

    
    

    const controller = new AbortController();

    const timer = setTimeout(async () => {
      setLoading(true);
      setError('');

      try {
        const response = await fetch(
          `https://dummyjson.com/users/search?q=${encodeURIComponent(search)}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        setUsers(data.users);
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message);
          setUsers([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [search]);

  return (
    <main>
      <h1>User Search</h1>

      <label htmlFor="user-search">Search by name</label>
      <input
        id="user-search"
        type="search"
        placeholder="Search for a user"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {loading && <p>Searching...</p>}
      {error && <p role="alert">{error}</p>}

      {!loading &&
        !error &&
        search.trim() !== '' &&
        users.length === 0 && <p>No users found.</p>}

      <div>
        {users.map((user) => (
          <article key={user.id}>
            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              width="80"
            />
            <h2>
              {user.firstName} {user.lastName}
            </h2>
            <p>{user.email}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default UserSearch;
