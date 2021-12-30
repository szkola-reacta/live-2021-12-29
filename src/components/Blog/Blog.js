import { useState, useEffect } from 'react';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [postsError, setPostsError] = useState(false);
  useEffect(() => {
    // TODO: refactor to service
    fetch('https://api.airtable.com/v0/appZ3Ko6K42jAMR0H/news', {
      headers: {
        // Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
        Authorization: 'Bearer key7v1yhHtBnsJkfD',
      }
    })
    .then((response, error) => {
      if (error) {
        console.log('Mam error in promise');
      }
      if (!response.ok) {
        // setPostsError(true);
        return;
      }
      return response.json();
    })
    .then(data => setPosts(data.records))
    .catch(error => setPostsError(true))
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      {postsError && <p>Błąd pobierania</p>}
      {posts.map((elem) => (
        <div key={elem.id}>
          <h3>{elem.fields.title}</h3>
          <p>{elem.fields.intro}</p>
        </div>
      ))}
    </div>
  );
}

export { Blog };
