'use client';

import { useState, useEffect } from 'react';
import session from '@lib/session/session.js';

export default function SessionPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    session()
      .then((res) => {
        if (isMounted) setData(res);
      })
      .catch((err) => {
        console.error('Failed to fetch session data:', err);
        if (isMounted) setError(true);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!data && !error) return null;

  // Show error if session fetch fails
  if (error) {
    return <pre>{JSON.stringify({ error: 'Failed To Fetch Session' }, null, 2)}</pre>;
  }

  // Return pure json to match the "api feeling". 
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
