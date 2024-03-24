export const fetchProducts = async () => {
  const response = await fetch("./websites.json");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
