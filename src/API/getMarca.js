import { useEffect, useState, useCallback } from "react";

export function getMarca(url, search = '') {
  const [state, setState] = useState({
    data: [],
    filteredResults: [],
    isLoading: true,
    error: null
  });

  const filterData = useCallback((data, searchTerm) => {
    if (!data || !Array.isArray(data)) return [];

    if (searchTerm) {
      return data.filter(item =>
        item.Dmarca?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return data;
  }, []);

  const fetchData = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();

      const filteredResults = filterData(data, search);

      setState({
        data,
        filteredResults,
        isLoading: false,
        error: null
      });
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : String(error),
        isLoading: false
      }));
    }
  }, [url, search, filterData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return {
    data: state.filteredResults,
    originalData: state.data,
    isLoading: state.isLoading,
    error: state.error,
    refetch
  };
}