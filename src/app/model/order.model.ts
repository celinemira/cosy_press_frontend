import {orderItem} from "./order_item.model";

export type order = {
  numero: string,
  command_date: Date,
  date_depot: null | Date,
  date_delivery: null | Date,
  total_price: string
  items: Array<orderItem>
};
