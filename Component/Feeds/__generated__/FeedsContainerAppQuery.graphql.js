/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Feeds_feed$ref = any;
export type FeedsContainerAppQueryVariables = {|
  count: number,
  after?: ?string,
|};
export type FeedsContainerAppQueryResponse = {|
  +$fragmentRefs: Feeds_feed$ref
|};
export type FeedsContainerAppQuery = {|
  variables: FeedsContainerAppQueryVariables,
  response: FeedsContainerAppQueryResponse,
|};
*/


/*
query FeedsContainerAppQuery(
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
  itemType
  typeId
  content {
    id
    previousApiId
    name
    offer
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
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "previousApiId",
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
    "name": "FeedsContainerAppQuery",
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
    "name": "FeedsContainerAppQuery",
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
                  (v5/*: any*/),
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
                    "concreteType": "HomePageContent",
                    "kind": "LinkedField",
                    "name": "content",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      (v5/*: any*/),
                      (v4/*: any*/),
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
    "cacheID": "908bdb074d3a6f60a3c8c43e61274ee3",
    "id": null,
    "metadata": {},
    "name": "FeedsContainerAppQuery",
    "operationKind": "query",
    "text": "query FeedsContainerAppQuery(\n  $count: Int!\n  $after: String\n) {\n  ...Feeds_feed\n}\n\nfragment Feeds_feed on Query {\n  getHomePage(first: $count, after: $after) {\n    edges {\n      node {\n        id\n        itemType\n        name\n        previousApiId\n        typeId\n        widget\n        ...RenderCard_item\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment RenderCard_item on HomePage {\n  name\n  widget\n  itemType\n  typeId\n  content {\n    id\n    previousApiId\n    name\n    offer\n    imageLink\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd75a2954f91c2ce89d2a8c65a3d28a4f';

module.exports = node;
