import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [data, setData] = useState([]);
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = codespace ? `https://${codespace}-8000.app.github.dev/api/teams/` : 'http://localhost:8000/api/teams/';

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Teams endpoint:', endpoint);
        console.log('Fetched data:', results);
      });
  }, [endpoint]);

  return (
    <div>
      <h2>Teams</h2>
      <ul>
        {Array.isArray(data) && data.map((item, idx) => (
          <li key={idx}>{item.name}: {item.members && item.members.join(', ')}</li>
        ))}
      </ul>
    </div>
  );
};

export default Teams;
