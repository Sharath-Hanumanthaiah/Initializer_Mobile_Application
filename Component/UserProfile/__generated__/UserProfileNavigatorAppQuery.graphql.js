/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UserProfileHeader_user$ref = any;
export type UserProfileNavigatorAppQueryVariables = {|
  userID: string
|};
export type UserProfileNavigatorAppQueryResponse = {|
  +$fragmentRefs: UserProfileHeader_user$ref
|};
export type UserProfileNavigatorAppQuery = {|
  variables: UserProfileNavigatorAppQueryVariables,
  response: UserProfileNavigatorAppQueryResponse,
|};
*/


/*
query UserProfileNavigatorAppQuery(
  $userID: ID!
) {
  ...UserProfileHeader_user
}

fragment UserProfileHeader_user on Query {
  getUserById(id: $userID) {
    id
    previousApiId
    firstName
    lastName
    email
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userID"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserProfileNavigatorAppQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "UserProfileHeader_user"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserProfileNavigatorAppQuery",
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
            "name": "firstName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lastName",
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
      }
    ]
  },
  "params": {
    "cacheID": "540ee42c39e0b0b3e400defa53c502cf",
    "id": null,
    "metadata": {},
    "name": "UserProfileNavigatorAppQuery",
    "operationKind": "query",
    "text": "query UserProfileNavigatorAppQuery(\n  $userID: ID!\n) {\n  ...UserProfileHeader_user\n}\n\nfragment UserProfileHeader_user on Query {\n  getUserById(id: $userID) {\n    id\n    previousApiId\n    firstName\n    lastName\n    email\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '368bb42d70d8d0334b6303026c5ad420';

module.exports = node;
