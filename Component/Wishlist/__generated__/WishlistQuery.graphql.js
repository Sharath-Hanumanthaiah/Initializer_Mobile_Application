/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Wishlist_wishlist$ref = any;
export type WishlistQueryVariables = {|
  count: number,
  after?: ?string,
  userId: string,
|};
export type WishlistQueryResponse = {|
  +$fragmentRefs: Wishlist_wishlist$ref
|};
export type WishlistQuery = {|
  variables: WishlistQueryVariables,
  response: WishlistQueryResponse,
|};
*/


/*
query WishlistQuery(
  $count: Int!
  $after: String
  $userId: ID!
) {
  ...Wishlist_wishlist
}

fragment ItemListItem_item on ItemDetails {
  id
  name
  imageLink
  isWishlist
  itemAvailability {
    actualPrice
    discount
    discountPrice
    value
    unit
  }
}

fragment Wishlist_wishlist on Query {
  getUserWishList(first: $count, after: $after, userId: $userId) {
    edges {
      cursor
      node {
        id
        ...ItemListItem_item
        __typename
      }
    }
    pageInfo {
      hasNextPage
      endCursor
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
    "name": "WishlistQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "Wishlist_wishlist"
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
    "name": "WishlistQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "ItemDetailsConnection",
        "kind": "LinkedField",
        "name": "getUserWishList",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ItemDetailsConnectionEdge",
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
                "concreteType": "ItemDetails",
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
                    "name": "name",
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
                    "name": "isWishlist",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ItemAvailability",
                    "kind": "LinkedField",
                    "name": "itemAvailability",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "actualPrice",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "discount",
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
                        "name": "value",
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
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
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
        "key": "Wishlist_getUserWishList",
        "kind": "LinkedHandle",
        "name": "getUserWishList"
      }
    ]
  },
  "params": {
    "cacheID": "623b33cca184e0b9dea6f51f4e0ae6a9",
    "id": null,
    "metadata": {},
    "name": "WishlistQuery",
    "operationKind": "query",
    "text": "query WishlistQuery(\n  $count: Int!\n  $after: String\n  $userId: ID!\n) {\n  ...Wishlist_wishlist\n}\n\nfragment ItemListItem_item on ItemDetails {\n  id\n  name\n  imageLink\n  isWishlist\n  itemAvailability {\n    actualPrice\n    discount\n    discountPrice\n    value\n    unit\n  }\n}\n\nfragment Wishlist_wishlist on Query {\n  getUserWishList(first: $count, after: $after, userId: $userId) {\n    edges {\n      cursor\n      node {\n        id\n        ...ItemListItem_item\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4cb61f64247066d22ff682b4f271b66a';

module.exports = node;
