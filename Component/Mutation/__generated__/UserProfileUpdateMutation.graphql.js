/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserDetailsInput = {|
  firstName?: ?string,
  id: string,
  lastName?: ?string,
|};
export type UserProfileUpdateMutationVariables = {|
  input: UserDetailsInput
|};
export type UserProfileUpdateMutationResponse = {|
  +updateUser: ?{|
    +userDetails: ?{|
      +id: string,
      +firstName: ?string,
      +lastName: ?string,
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
      firstName
      lastName
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
            "name": "firstName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lastName",
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
    "cacheID": "de2580be3e497b05cd4ba1038440a362",
    "id": null,
    "metadata": {},
    "name": "UserProfileUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation UserProfileUpdateMutation(\n  $input: UserDetailsInput!\n) {\n  updateUser(input: $input) {\n    userDetails {\n      id\n      firstName\n      lastName\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a3742109fd0e503c60f7b0c88650bf09';

module.exports = node;
