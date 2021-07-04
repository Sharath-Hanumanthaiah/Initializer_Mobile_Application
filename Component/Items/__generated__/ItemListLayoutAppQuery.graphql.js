/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ItemList_items$ref = any;
type ItemSubCategory_subCategory$ref = any;
export type ItemListLayoutAppQueryVariables = {|
  itemType: string,
  typeId: string,
  count: number,
  after?: ?string,
  categoryId?: ?string,
  userId: string,
|};
export type ItemListLayoutAppQueryResponse = {|
  +$fragmentRefs: ItemList_items$ref & ItemSubCategory_subCategory$ref
|};
export type ItemListLayoutAppQuery = {|
  variables: ItemListLayoutAppQueryVariables,
  response: ItemListLayoutAppQueryResponse,
|};
*/


/*
query ItemListLayoutAppQuery(
  $itemType: String!
  $typeId: String!
  $count: Int!
  $after: String
  $categoryId: String
  $userId: String!
) {
  ...ItemList_items
  ...ItemSubCategory_subCategory
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

fragment ItemSubCategory_subCategory on Query {
  getItemSubCategoryByCategoryId(first: $count, after: $after, categoryId: $categoryId) {
    edges {
      cursor
      node {
        id
        name
        offer
        imageLink
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
  "name": "categoryId"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "count"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "itemType"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "typeId"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v6 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v7 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "count"
},
v8 = [
  (v6/*: any*/),
  (v7/*: any*/),
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
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageLink",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v14 = {
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
},
v15 = [
  (v6/*: any*/),
  {
    "kind": "Variable",
    "name": "categoryId",
    "variableName": "categoryId"
  },
  (v7/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemListLayoutAppQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ItemList_items"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ItemSubCategory_subCategory"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v4/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Operation",
    "name": "ItemListLayoutAppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v8/*: any*/),
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
              (v9/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ItemDetails",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
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
                  (v13/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v14/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v8/*: any*/),
        "filters": [
          "itemType",
          "typeId",
          "userId"
        ],
        "handle": "connection",
        "key": "ItemList_getItemDetails",
        "kind": "LinkedHandle",
        "name": "getItemDetails"
      },
      {
        "alias": null,
        "args": (v15/*: any*/),
        "concreteType": "ItemSubCategoryConnection",
        "kind": "LinkedField",
        "name": "getItemSubCategoryByCategoryId",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ItemSubCategoryConnectionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              (v9/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ItemSubCategory",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v10/*: any*/),
                  (v11/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "offer",
                    "storageKey": null
                  },
                  (v12/*: any*/),
                  (v13/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v14/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v15/*: any*/),
        "filters": [
          "categoryId"
        ],
        "handle": "connection",
        "key": "ItemSubCategory_getItemSubCategoryByCategoryId",
        "kind": "LinkedHandle",
        "name": "getItemSubCategoryByCategoryId"
      }
    ]
  },
  "params": {
    "cacheID": "456e94d6433e9cd4eaf3e43b3924406d",
    "id": null,
    "metadata": {},
    "name": "ItemListLayoutAppQuery",
    "operationKind": "query",
    "text": "query ItemListLayoutAppQuery(\n  $itemType: String!\n  $typeId: String!\n  $count: Int!\n  $after: String\n  $categoryId: String\n  $userId: String!\n) {\n  ...ItemList_items\n  ...ItemSubCategory_subCategory\n}\n\nfragment ItemListItem_item on ItemDetails {\n  id\n  name\n  imageLink\n  isWishlist\n  itemAvailability {\n    actualPrice\n    discount\n    discountPrice\n    value\n    unit\n  }\n}\n\nfragment ItemList_items on Query {\n  getItemDetails(first: $count, after: $after, itemType: $itemType, typeId: $typeId, userId: $userId) {\n    edges {\n      cursor\n      node {\n        id\n        ...ItemListItem_item\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment ItemSubCategory_subCategory on Query {\n  getItemSubCategoryByCategoryId(first: $count, after: $after, categoryId: $categoryId) {\n    edges {\n      cursor\n      node {\n        id\n        name\n        offer\n        imageLink\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0c4df39327c8bc40e5e8c0fd3e3fc96a';

module.exports = node;
