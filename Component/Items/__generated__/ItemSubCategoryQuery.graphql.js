/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ItemSubCategory_subCategory$ref = any;
export type ItemSubCategoryQueryVariables = {|
  count: number,
  after?: ?string,
  categoryId: string,
|};
export type ItemSubCategoryQueryResponse = {|
  +$fragmentRefs: ItemSubCategory_subCategory$ref
|};
export type ItemSubCategoryQuery = {|
  variables: ItemSubCategoryQueryVariables,
  response: ItemSubCategoryQueryResponse,
|};
*/


/*
query ItemSubCategoryQuery(
  $count: Int!
  $after: String
  $categoryId: ID!
) {
  ...ItemSubCategory_subCategory
}

fragment ItemSubCategory_subCategory on Query {
  getItemSubCategoryByCategoryId(first: $count, after: $after, categoryId: $categoryId) {
    edges {
      cursor
      node {
        id
        previousApiId
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
v3 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "categoryId",
    "variableName": "categoryId"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
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
    "name": "ItemSubCategoryQuery",
    "selections": [
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
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "ItemSubCategoryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
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
                "concreteType": "ItemSubCategory",
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
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "offer",
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
    "cacheID": "c23ede432005cccf8510dfaf616518f0",
    "id": null,
    "metadata": {},
    "name": "ItemSubCategoryQuery",
    "operationKind": "query",
    "text": "query ItemSubCategoryQuery(\n  $count: Int!\n  $after: String\n  $categoryId: ID!\n) {\n  ...ItemSubCategory_subCategory\n}\n\nfragment ItemSubCategory_subCategory on Query {\n  getItemSubCategoryByCategoryId(first: $count, after: $after, categoryId: $categoryId) {\n    edges {\n      cursor\n      node {\n        id\n        previousApiId\n        name\n        offer\n        imageLink\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8f0a546c2fcc7dbc62defcf44c02c296';

module.exports = node;
