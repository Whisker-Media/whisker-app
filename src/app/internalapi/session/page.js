'use client';

import { useState, useEffect } from 'react';
import session from '@lib/session/session.js';

export default function SessionPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true;
    session()
      .then((res) => {
        if (isMounted) setData(res);
      })
      .catch((err) => {
        console.error('Failed to fetch session data:', err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!data) return null;

  return (
    <div>
      <h1>Whisker Media Session</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
