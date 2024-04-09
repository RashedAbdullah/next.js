export const getData = async (url) => {
  const data = await fetch(url);
  if (!data.ok) {
    throw new Error("Failed Data fetching...");
  }
  return data.json();
};
