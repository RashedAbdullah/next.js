export const getData = async (url) => {
  // const data = await fetch(url, { cache: "no-store" });
  const data = await fetch(url, {
    next: {
      revalidate: 10,
    },
  });
  if (!data.ok) {
    throw new Error("Failed Data fetching...");
  }
  return data.json();
};
