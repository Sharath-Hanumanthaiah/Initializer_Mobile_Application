/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CartList_cart$ref = any;
export type CartListQueryVariables = {|
  count: number,
  after?: ?string,
  userId: string,
|};
export type CartListQueryResponse = {|
  +$fragmentRefs: CartList_cart$ref
|};
export type CartListQuery = {|
  variables: CartListQueryVariables,
  response: CartListQueryResponse,
|};
*/


/*
query CartListQuery(
  $count: Int!
  $after: String
  $userId: ID!
) {
  ...CartList_cart
}

fragment CartListItem_Cart on UserCartList {
  id
  itemId
  userId
  availabilityId
  imageLink
  quantity
  itemName
  unit
  value
  discountPrice
}

fragment CartList_cart on Query {
  getUserCart(first: $count, after: $after, userId: $userId) {
    edges {
      cursor
      node {
        id
        userId
        itemId
        availabilityId
        imageLink
        quantity
        itemName
        unit
        value
        discountPrice
        ...CartListItem_Cart
        __typename
      }
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
    "name": "CartListQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "CartList_cart"
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
    "name": "CartListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "UserCartListConnection",
        "kind": "LinkedField",
        "name": "getUserCart",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserCartListConnectionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "UserCartList",
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
                    "name": "userId",
                    "storageKey": null
                  },
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
                    "name": "availabilityId",
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
                    "name": "quantity",
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
                    "name": "unit",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "value",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "discountPrice",
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
        "key": "CartList_getUserCart",
        "kind": "LinkedHandle",
        "name": "getUserCart"
      }
    ]
  },
  "params": {
    "cacheID": "7993d0e259e4068f89e37ec25ba1a1d9",
    "id": null,
    "metadata": {},
    "name": "CartListQuery",
    "operationKind": "query",
    "text": "query CartListQuery(\n  $count: Int!\n  $after: String\n  $userId: ID!\n) {\n  ...CartList_cart\n}\n\nfragment CartListItem_Cart on UserCartList {\n  id\n  itemId\n  userId\n  availabilityId\n  imageLink\n  quantity\n  itemName\n  unit\n  value\n  discountPrice\n}\n\nfragment CartList_cart on Query {\n  getUserCart(first: $count, after: $after, userId: $userId) {\n    edges {\n      cursor\n      node {\n        id\n        userId\n        itemId\n        availabilityId\n        imageLink\n        quantity\n        itemName\n        unit\n        value\n        discountPrice\n        ...CartListItem_Cart\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6fcb263d8d8f9056153fe79b6bd84f74';

module.exports = node;
