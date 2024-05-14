import { MenuItem } from "../types";

export function formatCurrency(quantity: MenuItem["price"]) {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
  }).format(quantity);
}
