import React, { useEffect, useState } from 'react';

const Users = () => {
  const [data, setData] = useState([]);
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = codespace ? `https://${codespace}-8000.app.github.dev/api/users/` : 'http://localhost:8000/api/users/';

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Users endpoint:', endpoint);
        console.log('Fetched data:', results);
      });
  }, [endpoint]);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {Array.isArray(data) && data.map((item, idx) => (
          <li key={idx}>{item.name} ({item.email}) - Team: {item.team}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
