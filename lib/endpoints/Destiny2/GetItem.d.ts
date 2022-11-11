/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.16.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response.js';
import { BungieClient } from '../../util/client.js';
import { DestinyComponentType } from '../../schemas/index.js';
import { BungieMembershipType } from '../../schemas/index.js';
import { DestinyItemResponse } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetItem} */
export declare type GetItemParams = {
    /**
     * A comma separated list of components to return (as strings or numeric values).
     * See the DestinyComponentType enum for valid components to request. You must
     * request at least one component to receive results.
    */
    components: DestinyComponentType[];
    /** The membership ID of the destiny profile. */
    destinyMembershipId: string;
    /** The Instance ID of the destiny item. */
    itemInstanceId: string;
    /** A valid non-BungieNet membership type. */
    membershipType: BungieMembershipType;
};
/**
 * Retrieve the details of an instanced Destiny Item. An instanced Destiny item is
 * one with an ItemInstanceId. Non-instanced items, such as materials, have no
 * useful instance-specific details and thus are not queryable here.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetItem}
*/
export declare function GetItem(this: BungieClient, params: GetItemParams): Promise<BungieNetResponse<DestinyItemResponse>>;
