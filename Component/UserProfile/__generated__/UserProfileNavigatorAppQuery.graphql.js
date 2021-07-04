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
  $userID: String!
) {
  ...UserProfileHeader_user
}

fragment UserProfileHeader_user on Query {
  getUserById(id: $userID) {
    id
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
    "cacheID": "47a83bdba2d30c2e03e95542ea0f890f",
    "id": null,
    "metadata": {},
    "name": "UserProfileNavigatorAppQuery",
    "operationKind": "query",
    "text": "query UserProfileNavigatorAppQuery(\n  $userID: String!\n) {\n  ...UserProfileHeader_user\n}\n\nfragment UserProfileHeader_user on Query {\n  getUserById(id: $userID) {\n    id\n    firstName\n    lastName\n    email\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '59273890bc7c5294b82f13fb88252002';

module.exports = node;
