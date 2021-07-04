/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type OrderDetailAppQueryVariables = {|
  orderId: string
|};
export type OrderDetailAppQueryResponse = {|
  +getUserOrderById: ?{|
    +id: string,
    +orderAt: ?any,
    +deliveredBy: ?any,
    +netAmount: ?number,
    +deliveryCharge: ?number,
    +coupenDiscount: ?number,
    +totalAmount: ?number,
    +paymentMode: ?string,
    +orderList: ?$ReadOnlyArray<?{|
      +itemId: string,
      +itemName: ?string,
      +quantity: ?number,
      +amount: ?number,
      +imageLink: ?string,
      +unit: ?string,
    |}>,
    +addressDetails: ?{|
      +id: string,
      +name: ?string,
      +phoneNumber: ?string,
      +firstLine: ?string,
      +secondLine: ?string,
      +landMark: ?string,
      +pinCode: ?string,
    |},
    +status: ?{|
      +payment: ?string,
      +confirmed: ?boolean,
      +delivered: ?boolean,
    |},
  |}
|};
export type OrderDetailAppQuery = {|
  variables: OrderDetailAppQueryVariables,
  response: OrderDetailAppQueryResponse,
|};
*/


/*
query OrderDetailAppQuery(
  $orderId: String!
) {
  getUserOrderById(orderId: $orderId) {
    id
    orderAt
    deliveredBy
    netAmount
    deliveryCharge
    coupenDiscount
    totalAmount
    paymentMode
    orderList {
      itemId
      itemName
      quantity
      amount
      imageLink
      unit
    }
    addressDetails {
      id
      name
      phoneNumber
      firstLine
      secondLine
      landMark
      pinCode
    }
    status {
      payment
      confirmed
      delivered
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "orderId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "orderId",
        "variableName": "orderId"
      }
    ],
    "concreteType": "UserOrderSet",
    "kind": "LinkedField",
    "name": "getUserOrderById",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "orderAt",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deliveredBy",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "netAmount",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deliveryCharge",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "coupenDiscount",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalAmount",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "paymentMode",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "UserOrder",
        "kind": "LinkedField",
        "name": "orderList",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "itemId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "itemName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "quantity",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "amount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "imageLink",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "unit",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Address",
        "kind": "LinkedField",
        "name": "addressDetails",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "phoneNumber",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "firstLine",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "secondLine",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "landMark",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "pinCode",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "OrderStatus",
        "kind": "LinkedField",
        "name": "status",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "payment",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "confirmed",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "delivered",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OrderDetailAppQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OrderDetailAppQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "d316d98a88ff937c2939e9ce40c0273f",
    "id": null,
    "metadata": {},
    "name": "OrderDetailAppQuery",
    "operationKind": "query",
    "text": "query OrderDetailAppQuery(\n  $orderId: String!\n) {\n  getUserOrderById(orderId: $orderId) {\n    id\n    orderAt\n    deliveredBy\n    netAmount\n    deliveryCharge\n    coupenDiscount\n    totalAmount\n    paymentMode\n    orderList {\n      itemId\n      itemName\n      quantity\n      amount\n      imageLink\n      unit\n    }\n    addressDetails {\n      id\n      name\n      phoneNumber\n      firstLine\n      secondLine\n      landMark\n      pinCode\n    }\n    status {\n      payment\n      confirmed\n      delivered\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '056bacab658573382e06c4804099c4f3';

module.exports = node;
