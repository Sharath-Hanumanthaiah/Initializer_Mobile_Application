/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserProfileHeader_user$ref: FragmentReference;
declare export opaque type UserProfileHeader_user$fragmentType: UserProfileHeader_user$ref;
export type UserProfileHeader_user = {|
  +getUserById: ?{|
    +id: string,
    +previousApiId: string,
    +firstName: ?string,
    +lastName: ?string,
    +email: ?string,
  |},
  +$refType: UserProfileHeader_user$ref,
|};
export type UserProfileHeader_user$data = UserProfileHeader_user;
export type UserProfileHeader_user$key = {
  +$data?: UserProfileHeader_user$data,
  +$fragmentRefs: UserProfileHeader_user$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "userID"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserProfileHeader_user",
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
  ],
  "type": "Query",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '24134e1f88dbd18667256fc0496532b0';

module.exports = node;
