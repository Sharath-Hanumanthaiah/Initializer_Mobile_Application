/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Feeds_feed$ref = any;
export type FeedgetHomePageRefetchQueryVariables = {|
  after?: ?string,
  count?: ?number,
|};
export type FeedgetHomePageRefetchQueryResponse = {|
  +$fragmentRefs: Feeds_feed$ref
|};
export type FeedgetHomePageRefetchQuery = {|
  variables: FeedgetHomePageRefetchQueryVariables,
  response: FeedgetHomePageRefetchQueryResponse,
|};
*/


/*
query FeedgetHomePageRefetchQuery(
  $after: String
  $count: Int
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
    name
    offer
    imageLink
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
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FeedgetHomePageRefetchQuery",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FeedgetHomePageRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "itemType",
                    "storageKey": null
                  },
                  (v3/*: any*/),
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
                      (v2/*: any*/),
                      (v3/*: any*/),
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
        "args": (v1/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "Feed_getHomePage",
        "kind": "LinkedHandle",
        "name": "getHomePage"
      }
    ]
  },
  "params": {
    "cacheID": "1785e20b17e697416e7358f340f88fd4",
    "id": null,
    "metadata": {},
    "name": "FeedgetHomePageRefetchQuery",
    "operationKind": "query",
    "text": "query FeedgetHomePageRefetchQuery(\n  $after: String\n  $count: Int\n) {\n  ...Feeds_feed\n}\n\nfragment Feeds_feed on Query {\n  getHomePage(first: $count, after: $after) {\n    edges {\n      node {\n        id\n        itemType\n        name\n        typeId\n        widget\n        ...RenderCard_item\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment RenderCard_item on HomePage {\n  name\n  widget\n  itemType\n  typeId\n  content {\n    id\n    name\n    offer\n    imageLink\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6f8948cabbc504c85ccae91fac543f90';

module.exports = node;
