import { useEffect, useState, useCallback } from "react";

export function getPantalla(url, dpanta = '', search = '') {

  const [state, setState] = useState({
    data: [],
    filteredResults: [],
    isLoading: true,
    error: null
  });


  const filterData = useCallback((data, dpantaFilter, searchTerm) => {

    let filtered = data;

    if (dpantaFilter) {
      filtered = filtered.filter(item =>
        item.dpanta.toLowerCase().includes(dpantaFilter.toLowerCase())
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.dpanta.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, []);


  const fetchData = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();

      const filteredResults = filterData(data, dpanta, search);

      setState({
        data,
        filteredResults,
        isLoading: false,
        error: null
      });
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error.message,
        isLoading: false
      }));
    }
  }, [url, dpanta, search, filterData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = () => {
    fetchData();
  };

  return {
    data: state.filteredResults,
    isLoading: state.isLoading,
    error: state.error,
    refetch
  };
}