/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserDetailsInput = {|
  email?: ?string,
  firstName?: ?string,
  lastName?: ?string,
  previousApiId: string,
|};
export type UserProfileUpdateMutationVariables = {|
  input: UserDetailsInput
|};
export type UserProfileUpdateMutationResponse = {|
  +updateUser: ?{|
    +userDetails: ?{|
      +id: string,
      +previousApiId: string,
      +firstName: ?string,
      +lastName: ?string,
      +email: ?string,
    |}
  |}
|};
export type UserProfileUpdateMutation = {|
  variables: UserProfileUpdateMutationVariables,
  response: UserProfileUpdateMutationResponse,
|};
*/


/*
mutation UserProfileUpdateMutation(
  $input: UserDetailsInput!
) {
  updateUser(input: $input) {
    userDetails {
      id
      previousApiId
      firstName
      lastName
      email
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UserDetailsOutput",
    "kind": "LinkedField",
    "name": "updateUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserDetails",
        "kind": "LinkedField",
        "name": "userDetails",
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserProfileUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserProfileUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1fa92f720ce4fa9cf0bca5397fa31c14",
    "id": null,
    "metadata": {},
    "name": "UserProfileUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation UserProfileUpdateMutation(\n  $input: UserDetailsInput!\n) {\n  updateUser(input: $input) {\n    userDetails {\n      id\n      previousApiId\n      firstName\n      lastName\n      email\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a71c570c8be78726a02c8eea01e10572';

module.exports = node;
