/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { editGroupMembership } from '../../lib-ts/endpoints/GroupV2';
import { editGroupMembershipTest as testCases } from '../../test-src/GroupV2';
import { test } from '@jest/globals';

testCases.map(tc => (
    test(tc.name, async () => {
        let res;
        try {
            res = await editGroupMembership(tc.params)
        } catch (e) {
            return tc.promise.failure(e)
        }
        return tc.promise.success(res)
    })
));
