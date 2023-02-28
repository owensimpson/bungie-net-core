/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
import { DestinyInsertPlugsRequestEntry } from './DestinyInsertPlugsRequestEntry';
import { BungieMembershipType } from '../../../BungieMembershipType';
/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Requests.Actions.DestinyInsertPlugsFreeActionRequest} */
export interface DestinyInsertPlugsFreeActionRequest {
    /** The plugs being inserted. */
    readonly plug: DestinyInsertPlugsRequestEntry;
    /** The instance ID of the item for this action request. */
    readonly itemId: string;
    readonly characterId: string;
    readonly membershipType: BungieMembershipType;
}
