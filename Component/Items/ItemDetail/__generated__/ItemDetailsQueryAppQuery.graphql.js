/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ItemDetail_comment$ref = any;
type ItemDetail_item$ref = any;
export type ItemDetailsQueryAppQueryVariables = {|
  itemId: string,
  userId: string,
  count: number,
  after?: ?string,
|};
export type ItemDetailsQueryAppQueryResponse = {|
  +$fragmentRefs: ItemDetail_item$ref & ItemDetail_comment$ref
|};
export type ItemDetailsQueryAppQuery = {|
  variables: ItemDetailsQueryAppQueryVariables,
  response: ItemDetailsQueryAppQueryResponse,
|};
*/


/*
query ItemDetailsQueryAppQuery(
  $itemId: String!
  $userId: String!
  $count: Int!
  $after: String
) {
  ...ItemDetail_item
  ...ItemDetail_comment
}

fragment ItemDetail_comment on Query {
  getItemReview(first: $count, after: $after, itemId: $itemId) {
    edges {
      cursor
      node {
        id
        itemId
        userId
        userName
        rating
        review
        changedAt
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment ItemDetail_item on Query {
  getItemDetailsById(itemId: $itemId, userId: $userId) {
    id
    name
    itemAvailability {
      id
      actualPrice
      discount
      discountPrice
      value
      unit
    }
    description {
      itemProperties
      sellerName
      disclaimer
    }
    imageLinks
    isWishlist
    averageRating
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
  "name": "itemId"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v4 = {
  "kind": "Variable",
  "name": "itemId",
  "variableName": "itemId"
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = [
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
  (v4/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemDetailsQueryAppQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ItemDetail_item"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ItemDetail_comment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v3/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "ItemDetailsQueryAppQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          (v4/*: any*/),
          {
            "kind": "Variable",
            "name": "userId",
            "variableName": "userId"
          }
        ],
        "concreteType": "ItemDetails",
        "kind": "LinkedField",
        "name": "getItemDetailsById",
        "plural": false,
        "selections": [
          (v5/*: any*/),
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
            "concreteType": "ItemAvailability",
            "kind": "LinkedField",
            "name": "itemAvailability",
            "plural": true,
            "selections": [
              (v5/*: any*/),
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
            "concreteType": "ItemDescription",
            "kind": "LinkedField",
            "name": "description",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "itemProperties",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "sellerName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "disclaimer",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "imageLinks",
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
            "kind": "ScalarField",
            "name": "averageRating",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "UserReviewConnection",
        "kind": "LinkedField",
        "name": "getItemReview",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserReviewConnectionEdge",
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
                "concreteType": "UserReviewOutput",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
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
                    "name": "userId",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "userName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "rating",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "review",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "changedAt",
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
        "args": (v6/*: any*/),
        "filters": [
          "itemId"
        ],
        "handle": "connection",
        "key": "CommentModel_getItemReview",
        "kind": "LinkedHandle",
        "name": "getItemReview"
      }
    ]
  },
  "params": {
    "cacheID": "c970e86319d4cbe8bc2dd1d6ded1bdd1",
    "id": null,
    "metadata": {},
    "name": "ItemDetailsQueryAppQuery",
    "operationKind": "query",
    "text": "query ItemDetailsQueryAppQuery(\n  $itemId: String!\n  $userId: String!\n  $count: Int!\n  $after: String\n) {\n  ...ItemDetail_item\n  ...ItemDetail_comment\n}\n\nfragment ItemDetail_comment on Query {\n  getItemReview(first: $count, after: $after, itemId: $itemId) {\n    edges {\n      cursor\n      node {\n        id\n        itemId\n        userId\n        userName\n        rating\n        review\n        changedAt\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment ItemDetail_item on Query {\n  getItemDetailsById(itemId: $itemId, userId: $userId) {\n    id\n    name\n    itemAvailability {\n      id\n      actualPrice\n      discount\n      discountPrice\n      value\n      unit\n    }\n    description {\n      itemProperties\n      sellerName\n      disclaimer\n    }\n    imageLinks\n    isWishlist\n    averageRating\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bc8e227aec3d830b2bf003a9e92b6032';

module.exports = node;
