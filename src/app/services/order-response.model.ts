import {OrderLineView} from './order-line-view.model';

export class OrderResponse {

  constructor(public id: string, public orderlineViews: OrderLineView[]) {
  }
}
