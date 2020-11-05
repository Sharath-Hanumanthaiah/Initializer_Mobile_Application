/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Feeds_feed$ref = any;
export type FeedsListQueryVariables = {|
  count: number,
  after?: ?string,
|};
export type FeedsListQueryResponse = {|
  +$fragmentRefs: Feeds_feed$ref
|};
export type FeedsListQuery = {|
  variables: FeedsListQueryVariables,
  response: FeedsListQueryResponse,
|};
*/


/*
query FeedsListQuery(
  $count: Int!
  $after: String
) {
  ...Feeds_feed
}

fragment Feeds_feed on Query {
  getHomePage(first: $count, after: $after) {
    edges {
      node {
        id
        itemType
        name
        previousApiId
        typeId
        widget
        ...RenderCard_item
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

fragment RenderCard_item on HomePage {
  name
  widget
  content {
    id
    name
    imageLink
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
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "FeedsListQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "Feeds_feed"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "FeedsListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "HomePageConnection",
        "kind": "LinkedField",
        "name": "getHomePage",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "HomePageConnectionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "HomePage",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "itemType",
                    "storageKey": null
                  },
                  (v4/*: any*/),
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
                    "name": "typeId",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "widget",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ItemCategory",
                    "kind": "LinkedField",
                    "name": "content",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "imageLink",
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
        "args": (v2/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "Feed_getHomePage",
        "kind": "LinkedHandle",
        "name": "getHomePage"
      }
    ]
  },
  "params": {
    "cacheID": "93968649cf49dc6b1982e815f181ac0d",
    "id": null,
    "metadata": {},
    "name": "FeedsListQuery",
    "operationKind": "query",
    "text": "query FeedsListQuery(\n  $count: Int!\n  $after: String\n) {\n  ...Feeds_feed\n}\n\nfragment Feeds_feed on Query {\n  getHomePage(first: $count, after: $after) {\n    edges {\n      node {\n        id\n        itemType\n        name\n        previousApiId\n        typeId\n        widget\n        ...RenderCard_item\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment RenderCard_item on HomePage {\n  name\n  widget\n  content {\n    id\n    name\n    imageLink\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a8aaf291d4679fe8b299ee377d8fa551';

module.exports = node;
