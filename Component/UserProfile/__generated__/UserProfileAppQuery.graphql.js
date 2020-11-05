/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AddressList_address$ref = any;
type UserProfileHeader_user$ref = any;
export type UserProfileAppQueryVariables = {|
  userID: string,
  count: number,
  after?: ?string,
|};
export type UserProfileAppQueryResponse = {|
  +$fragmentRefs: UserProfileHeader_user$ref & AddressList_address$ref
|};
export type UserProfileAppQuery = {|
  variables: UserProfileAppQueryVariables,
  response: UserProfileAppQueryResponse,
|};
*/


/*
query UserProfileAppQuery(
  $userID: ID!
  $count: Int!
  $after: String
) {
  ...UserProfileHeader_user
  ...AddressList_address
}

fragment AddressList_address on Query {
  getAddress(first: $count, after: $after, userId: $userID) {
    edges {
      node {
        id
        name
        firstLine
        secondLine
        pinCode
        phoneNumber
        landMark
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

fragment UserProfileHeader_user on Query {
  getUserById(id: $userID) {
    id
    firstName
    email
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
  "name": "userID"
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
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
    "variableName": "userID"
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
    "name": "UserProfileAppQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "UserProfileHeader_user"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "AddressList_address"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "UserProfileAppQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "userID"
          }
        ],
        "concreteType": "UserDetails",
        "kind": "LinkedField",
        "name": "getUserById",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "firstName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "AddressConnection",
        "kind": "LinkedField",
        "name": "getAddress",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "AddressConnectionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Address",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
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
                    "name": "firstLine",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "secondLine",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "pinCode",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "phoneNumber",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "landMark",
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
        "args": (v4/*: any*/),
        "filters": [
          "userId"
        ],
        "handle": "connection",
        "key": "AddressList_getAddress",
        "kind": "LinkedHandle",
        "name": "getAddress"
      }
    ]
  },
  "params": {
    "cacheID": "6f9b6a924fa7631e66b4d7258b1fdecb",
    "id": null,
    "metadata": {},
    "name": "UserProfileAppQuery",
    "operationKind": "query",
    "text": "query UserProfileAppQuery(\n  $userID: ID!\n  $count: Int!\n  $after: String\n) {\n  ...UserProfileHeader_user\n  ...AddressList_address\n}\n\nfragment AddressList_address on Query {\n  getAddress(first: $count, after: $after, userId: $userID) {\n    edges {\n      node {\n        id\n        name\n        firstLine\n        secondLine\n        pinCode\n        phoneNumber\n        landMark\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment UserProfileHeader_user on Query {\n  getUserById(id: $userID) {\n    id\n    firstName\n    email\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e2a1426ae58360ca96b0aeb34567d874';

module.exports = node;
