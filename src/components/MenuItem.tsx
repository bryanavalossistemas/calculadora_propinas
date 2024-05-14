import { formatCurrency } from "../helpers";
import type { MenuItem } from "../types";

type MenuItemProps = {
  menuItem: MenuItem;
  addItem: (menuItem: MenuItem) => void;
};

export default function MenuItem({ menuItem, addItem }: MenuItemProps) {
  return (
    <button
      onClick={() => addItem(menuItem)}
      className="border-2 border-teal-400 rounded-md w-full p-3 flex justify-between hover:bg-teal-200"
    >
      <p>{menuItem.name}</p>
      <p className="font-black">{formatCurrency(menuItem.price)}</p>
    </button>
  );
}
