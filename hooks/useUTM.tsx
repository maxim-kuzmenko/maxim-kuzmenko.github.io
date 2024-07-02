import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const useUTM = () => {
  const router = useRouter();
  const [referrer, setReferrer] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const referrerValue = urlParams.get('referrer');

    if (referrerValue) {
      // console.log('Setting referrer from URL params:', referrerValue);
      localStorage.setItem('referrer', referrerValue);
      setReferrer(referrerValue);
    } else {
      // console.log('No referrer in URL params, checking localStorage');
      const storedReferrer = localStorage.getItem('referrer');
      if (storedReferrer) {
        // console.log('Found referrer in localStorage:', storedReferrer);
        setReferrer(storedReferrer);
      } else {
        // console.log('No referrer in localStorage');
      }
    }
  }, []);

  return {
    referrer,
  };
};

export default useUTM;
