/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ItemList_items$ref = any;
export type ItemListQueryVariables = {|
  count: number,
  after?: ?string,
  itemType: string,
  typeId: string,
  userId: string,
|};
export type ItemListQueryResponse = {|
  +$fragmentRefs: ItemList_items$ref
|};
export type ItemListQuery = {|
  variables: ItemListQueryVariables,
  response: ItemListQueryResponse,
|};
*/


/*
query ItemListQuery(
  $count: Int!
  $after: String
  $itemType: String!
  $typeId: String!
  $userId: String!
) {
  ...ItemList_items
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

fragment ItemList_items on Query {
  getItemDetails(first: $count, after: $after, itemType: $itemType, typeId: $typeId, userId: $userId) {
    edges {
      cursor
      node {
        id
        ...ItemListItem_item
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
  "name": "itemType"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "typeId"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v5 = [
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
    "name": "itemType",
    "variableName": "itemType"
  },
  {
    "kind": "Variable",
    "name": "typeId",
    "variableName": "typeId"
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
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemListQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ItemList_items"
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
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Operation",
    "name": "ItemListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "ItemDetailsConnection",
        "kind": "LinkedField",
        "name": "getItemDetails",
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
        "args": (v5/*: any*/),
        "filters": [
          "itemType",
          "typeId",
          "userId"
        ],
        "handle": "connection",
        "key": "ItemList_getItemDetails",
        "kind": "LinkedHandle",
        "name": "getItemDetails"
      }
    ]
  },
  "params": {
    "cacheID": "62cf9faf2004e68998a87d1272bf6362",
    "id": null,
    "metadata": {},
    "name": "ItemListQuery",
    "operationKind": "query",
    "text": "query ItemListQuery(\n  $count: Int!\n  $after: String\n  $itemType: String!\n  $typeId: String!\n  $userId: String!\n) {\n  ...ItemList_items\n}\n\nfragment ItemListItem_item on ItemDetails {\n  id\n  name\n  imageLink\n  isWishlist\n  itemAvailability {\n    actualPrice\n    discount\n    discountPrice\n    value\n    unit\n  }\n}\n\nfragment ItemList_items on Query {\n  getItemDetails(first: $count, after: $after, itemType: $itemType, typeId: $typeId, userId: $userId) {\n    edges {\n      cursor\n      node {\n        id\n        ...ItemListItem_item\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '974119727af4ecd0ce112dc423f91f60';

module.exports = node;
