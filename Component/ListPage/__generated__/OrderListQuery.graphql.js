/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OrderList_orders$ref = any;
export type OrderListQueryVariables = {|
  count: number,
  after?: ?string,
  userId: string,
|};
export type OrderListQueryResponse = {|
  +$fragmentRefs: OrderList_orders$ref
|};
export type OrderListQuery = {|
  variables: OrderListQueryVariables,
  response: OrderListQueryResponse,
|};
*/


/*
query OrderListQuery(
  $count: Int!
  $after: String
  $userId: ID!
) {
  ...OrderList_orders
}

fragment OrderList_orders on Query {
  getUserOrderSet(first: $count, after: $after, userId: $userId) {
    edges {
      node {
        id
        previousApiId
        deliveredBy
        orderDetails
        totalAmount
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
    "name": "OrderListQuery",
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
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "OrderListQuery",
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
                    "name": "previousApiId",
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
        "filters": [
          "userId"
        ],
        "handle": "connection",
        "key": "OrderList_getUserOrderSet",
        "kind": "LinkedHandle",
        "name": "getUserOrderSet"
      }
    ]
  },
  "params": {
    "cacheID": "1470c15317048bad688e94de7550e459",
    "id": null,
    "metadata": {},
    "name": "OrderListQuery",
    "operationKind": "query",
    "text": "query OrderListQuery(\n  $count: Int!\n  $after: String\n  $userId: ID!\n) {\n  ...OrderList_orders\n}\n\nfragment OrderList_orders on Query {\n  getUserOrderSet(first: $count, after: $after, userId: $userId) {\n    edges {\n      node {\n        id\n        previousApiId\n        deliveredBy\n        orderDetails\n        totalAmount\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bf251a3ba29a97e78ba2940f90c3c7f9';

module.exports = node;
