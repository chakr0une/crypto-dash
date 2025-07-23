import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_COIN_API_URL;

function CoinDetailsPage() {
  const { id } = useParams();

  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) throw new Error('Failed to fetch coin data');
        const data = await res.json();
        setCoin(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoin();
  }, [id]);

  return <>details {id}</>;
}

export default CoinDetailsPage;
