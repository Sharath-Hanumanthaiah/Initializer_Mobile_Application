/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddressInput = {|
  firstLine?: ?string,
  id?: ?string,
  landMark?: ?string,
  name: string,
  phoneNumber: string,
  pinCode?: ?string,
  secondLine?: ?string,
  userId: string,
|};
export type AddressMutationVariables = {|
  input: AddressInput
|};
export type AddressMutationResponse = {|
  +upsertAddress: ?{|
    +address: ?{|
      +id: string,
      +name: ?string,
      +phoneNumber: ?string,
      +firstLine: ?string,
      +secondLine: ?string,
      +landMark: ?string,
      +pinCode: ?string,
    |}
  |}
|};
export type AddressMutation = {|
  variables: AddressMutationVariables,
  response: AddressMutationResponse,
|};
*/


/*
mutation AddressMutation(
  $input: AddressInput!
) {
  upsertAddress(input: $input) {
    address {
      id
      name
      phoneNumber
      firstLine
      secondLine
      landMark
      pinCode
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
    "concreteType": "AddressOutput",
    "kind": "LinkedField",
    "name": "upsertAddress",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Address",
        "kind": "LinkedField",
        "name": "address",
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
            "name": "name",
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
            "name": "landMark",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "pinCode",
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
    "name": "AddressMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddressMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5dadcce380f96d286932c4a290e5ca75",
    "id": null,
    "metadata": {},
    "name": "AddressMutation",
    "operationKind": "mutation",
    "text": "mutation AddressMutation(\n  $input: AddressInput!\n) {\n  upsertAddress(input: $input) {\n    address {\n      id\n      name\n      phoneNumber\n      firstLine\n      secondLine\n      landMark\n      pinCode\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd5ef8d06b718871485ab87a594832fa5';

module.exports = node;
