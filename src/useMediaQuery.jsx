import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const handleChange = () => setMatches(media.matches);

    // Initial check
    handleChange();

    // Set up the event listener
    media.addEventListener('change', handleChange);

    return () => {
      media.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
