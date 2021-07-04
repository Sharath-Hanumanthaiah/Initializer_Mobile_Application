/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateOrderInput = {|
  addressId: string,
  coupenCode?: ?string,
  orderId?: ?string,
  paymentMode: string,
  userId: string,
|};
export type CreateOrderFromCartMutationVariables = {|
  input: CreateOrderInput
|};
export type CreateOrderFromCartMutationResponse = {|
  +createOrderFromCart: {|
    +orderId: string,
    +deliveredBy: ?any,
    +totalAmount: ?number,
    +paymentMode: ?string,
    +status: ?{|
      +payment: ?string,
      +confirmed: ?boolean,
      +delivered: ?boolean,
    |},
    +paymentMetadata: ?{|
      +gatewayName: ?string,
      +secretKey: ?string,
      +publicKey: ?string,
      +externalOrderId: ?string,
    |},
  |}
|};
export type CreateOrderFromCartMutation = {|
  variables: CreateOrderFromCartMutationVariables,
  response: CreateOrderFromCartMutationResponse,
|};
*/


/*
mutation CreateOrderFromCartMutation(
  $input: CreateOrderInput!
) {
  createOrderFromCart(input: $input) {
    orderId
    deliveredBy
    totalAmount
    paymentMode
    status {
      payment
      confirmed
      delivered
    }
    paymentMetadata {
      gatewayName
      secretKey
      publicKey
      externalOrderId
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateOrderOutput",
    "kind": "LinkedField",
    "name": "createOrderFromCart",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "orderId",
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "PaymentMetadata",
        "kind": "LinkedField",
        "name": "paymentMetadata",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "gatewayName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "secretKey",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "publicKey",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "externalOrderId",
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
    "name": "CreateOrderFromCartMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateOrderFromCartMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f955a25559ccaf7a36a65fdc1d122bb6",
    "id": null,
    "metadata": {},
    "name": "CreateOrderFromCartMutation",
    "operationKind": "mutation",
    "text": "mutation CreateOrderFromCartMutation(\n  $input: CreateOrderInput!\n) {\n  createOrderFromCart(input: $input) {\n    orderId\n    deliveredBy\n    totalAmount\n    paymentMode\n    status {\n      payment\n      confirmed\n      delivered\n    }\n    paymentMetadata {\n      gatewayName\n      secretKey\n      publicKey\n      externalOrderId\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c337b448906fa251f914f367c4d6ff11';

module.exports = node;
