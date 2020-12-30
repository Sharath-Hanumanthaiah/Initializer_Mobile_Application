/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ItemDetail_comment$ref = any;
export type ItemDetailQueryVariables = {|
  count: number,
  after?: ?string,
  itemId: string,
|};
export type ItemDetailQueryResponse = {|
  +$fragmentRefs: ItemDetail_comment$ref
|};
export type ItemDetailQuery = {|
  variables: ItemDetailQueryVariables,
  response: ItemDetailQueryResponse,
|};
*/


/*
query ItemDetailQuery(
  $count: Int!
  $after: String
  $itemId: ID!
) {
  ...ItemDetail_comment
}

fragment ItemDetail_comment on Query {
  getItemReview(first: $count, after: $after, itemId: $itemId) {
    edges {
      cursor
      node {
        id
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
    "name": "itemId",
    "variableName": "itemId"
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
    "name": "ItemDetailQuery",
    "selections": [
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
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "ItemDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
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
                "concreteType": "UserReview",
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
        "args": (v3/*: any*/),
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
    "cacheID": "8a47b3db309dfec00a45710f93b06883",
    "id": null,
    "metadata": {},
    "name": "ItemDetailQuery",
    "operationKind": "query",
    "text": "query ItemDetailQuery(\n  $count: Int!\n  $after: String\n  $itemId: ID!\n) {\n  ...ItemDetail_comment\n}\n\nfragment ItemDetail_comment on Query {\n  getItemReview(first: $count, after: $after, itemId: $itemId) {\n    edges {\n      cursor\n      node {\n        id\n        userName\n        rating\n        review\n        changedAt\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f9ccdcfcf53e1029427608788626ff61';

module.exports = node;
