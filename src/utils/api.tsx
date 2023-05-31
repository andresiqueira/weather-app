let api = async (city: string | undefined, signal: AbortSignal | undefined) => {
  const response = await fetch(`${process.env.BASE_URL}&lang=pt&city=${city}&key=${process.env.API_KEY}`, { signal });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const result = await response.json()
  return result.data[0];
}

export default api;