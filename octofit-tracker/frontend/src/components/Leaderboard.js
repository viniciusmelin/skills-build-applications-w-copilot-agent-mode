import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [data, setData] = useState([]);
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = codespace ? `https://${codespace}-8000.app.github.dev/api/leaderboard/` : 'http://localhost:8000/api/leaderboard/';

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Leaderboard endpoint:', endpoint);
        console.log('Fetched data:', results);
      });
  }, [endpoint]);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {Array.isArray(data) && data.map((item, idx) => (
          <li key={idx}>{item.team}: {item.points} pts</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
