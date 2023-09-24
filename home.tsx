import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = "Hello, World!";
  }, []);
  
  return (
    <main>
      <h1>Hello, World!</h1>
    </main>
  );
}
