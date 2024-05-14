import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  function addItem(menuItem: MenuItem) {
    const index = order.findIndex((ordeItem) => ordeItem.id === menuItem.id);
    if (index === -1) {
      const newItem: OrderItem = { ...menuItem, quantity: 1 };
      console.log(order);
      setOrder([...order, newItem]);
    } else {
      const updatedOrder = order.map((orderItem) => {
        if (orderItem.id === menuItem.id) {
          return { ...orderItem, quantity: orderItem.quantity + 1 };
        }
        return orderItem;
      });
      setOrder(updatedOrder);
    }
  }

  function removeItem(id: OrderItem["id"]) {
    const updatedOrder = order.filter((orderItem) => orderItem.id !== id);
    setOrder(updatedOrder);
  }

  function placeOrder() {
    setOrder([]);
    setTip(0);
  }

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder,
  };
}
