/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OrderList_orders$ref = any;
export type OrderListPaginationQueryVariables = {|
  after?: ?string,
  count?: ?number,
  userId: string,
|};
export type OrderListPaginationQueryResponse = {|
  +$fragmentRefs: OrderList_orders$ref
|};
export type OrderListPaginationQuery = {|
  variables: OrderListPaginationQueryVariables,
  response: OrderListPaginationQueryResponse,
|};
*/


/*
query OrderListPaginationQuery(
  $after: String
  $count: Int
  $userId: String!
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = [
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OrderListPaginationQuery",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OrderListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
        "args": (v1/*: any*/),
        "filters": [],
        "handle": "connection",
        "key": "OrderList_getUserOrderSet",
        "kind": "LinkedHandle",
        "name": "getUserOrderSet"
      }
    ]
  },
  "params": {
    "cacheID": "717c019f83ca33f69da1affb43b3f9d2",
    "id": null,
    "metadata": {},
    "name": "OrderListPaginationQuery",
    "operationKind": "query",
    "text": "query OrderListPaginationQuery(\n  $after: String\n  $count: Int\n  $userId: String!\n) {\n  ...OrderList_orders\n}\n\nfragment OrderList_orders on Query {\n  getUserOrderSet(first: $count, after: $after, userId: $userId) {\n    edges {\n      node {\n        id\n        deliveredBy\n        orderDetails\n        totalAmount\n        paymentMode\n        status {\n          payment\n          confirmed\n          delivered\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd71446d8f6192dc20577de427ad6c0b7';

module.exports = node;
