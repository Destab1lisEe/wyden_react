import { ISpoiler } from "../models";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

export function useSpoilers(){
  const [spoilers, setSpoilers] = useState<ISpoiler[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')
  const [modal, setModal] = useState(false)

  function addSpoiler(spoiler: ISpoiler){
    setSpoilers(prev => [...prev, spoiler])
  }

  async function fetchSpoilers() {
    try{
      const response = await axios.get<ISpoiler[]>(
        "https://fakestoreapi.com/products?limit=10"
      );
      setSpoilers(response.data);
      setLoading(false);
    } catch (e: unknown) {
      setLoading(false)
      const error = e as AxiosError
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchSpoilers();
  }, []);

  return {spoilers, loading, error, modal, setModal, addSpoiler}
}