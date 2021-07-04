/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OrderList_orders$ref = any;
export type OrderAppQueryVariables = {|
  userId: string,
  count: number,
  after?: ?string,
|};
export type OrderAppQueryResponse = {|
  +$fragmentRefs: OrderList_orders$ref
|};
export type OrderAppQuery = {|
  variables: OrderAppQueryVariables,
  response: OrderAppQueryResponse,
|};
*/


/*
query OrderAppQuery(
  $userId: String!
  $count: Int!
  $after: String
) {
  ...OrderList_orders
}

fragment OrderList_orders on Query {
  getUserOrderSet(first: $count, after: $after, userId: $userId) {
    edges {
      node {
        id
        deliveredBy
        orderDetails
        totalAmount
        paymentMode
        status {
          payment
          confirmed
          delivered
        }
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "count"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v3 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  {
    "kind": "Variable",
    "name": "userId",
    "variableName": "userId"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "OrderAppQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "OrderList_orders"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "OrderAppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "UserOrderSetConnection",
        "kind": "LinkedField",
        "name": "getUserOrderSet",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserOrderSetConnectionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserOrderSet",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
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
                    "name": "orderDetails",
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
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "filters": [],
        "handle": "connection",
        "key": "OrderList_getUserOrderSet",
        "kind": "LinkedHandle",
        "name": "getUserOrderSet"
      }
    ]
  },
  "params": {
    "cacheID": "3c6d4fe984d4584cb781f19e7c94fcf5",
    "id": null,
    "metadata": {},
    "name": "OrderAppQuery",
    "operationKind": "query",
    "text": "query OrderAppQuery(\n  $userId: String!\n  $count: Int!\n  $after: String\n) {\n  ...OrderList_orders\n}\n\nfragment OrderList_orders on Query {\n  getUserOrderSet(first: $count, after: $after, userId: $userId) {\n    edges {\n      node {\n        id\n        deliveredBy\n        orderDetails\n        totalAmount\n        paymentMode\n        status {\n          payment\n          confirmed\n          delivered\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '99031bb8801ebf2e329b8f1130abe75a';

module.exports = node;
