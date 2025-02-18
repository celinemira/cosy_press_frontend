import {service} from "./service.model";

export type orderItem = {
  service: service,
  quantity: bigint,
  price_unit: string,
  isRepassage: boolean,
  isLavage: boolean
};
