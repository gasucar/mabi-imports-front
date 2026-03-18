export const formatPrice = (price: string): string => {
  if (!price) return "0";

  const number = Number(price);

  if (isNaN(number)) return price;

  return number.toLocaleString("es-AR");
};