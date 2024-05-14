import { formatCurrency } from "../helpers";
import type { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem(id: OrderItem["id"]): void;
};
export default function OrderContents({
  order,
  removeItem,
}: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-10">
        {order.map((orderItem) => (
          <div
            key={orderItem.id}
            className="flex justify-between items-center border-t border-gray-200 p-5 last-of-type:border-b"
          >
            <div>
              <p className="text-lg">
                {orderItem.name} - {formatCurrency(orderItem.price)}
              </p>
              <p className="font-black">
                Cantidad: {orderItem.quantity} -{" "}
                {formatCurrency(orderItem.price * orderItem.quantity)}
              </p>
            </div>
            <button
              onClick={() => removeItem(orderItem.id)}
              className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
