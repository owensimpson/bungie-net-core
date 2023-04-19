/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.0
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { AwaUserSelection } from './AwaUserSelection';
import { AwaResponseReason } from './AwaResponseReason';
import { AwaType } from './AwaType';
import { BungieMembershipType } from '../../BungieMembershipType';
/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Advanced.AwaAuthorizationResult} */
export interface AwaAuthorizationResult {
    /**
     * Indication of how the user responded to the request. If the value is "Approved"
     * the actionToken will contain the token that can be presented when performing the
     * advanced write action.
    */
    readonly userSelection: AwaUserSelection;
    readonly responseReason: AwaResponseReason;
    /** Message to the app developer to help understand the response. */
    readonly developerNote: string;
    /** Credential used to prove the user authorized an advanced write action. */
    readonly actionToken: string;
    /**
     * This token may be used to perform the requested action this number of times, at
     * a maximum. If this value is 0, then there is no limit.
    */
    readonly maximumNumberOfUses: number;
    /** Time, UTC, when token expires. */
    readonly validUntil?: string;
    /** Advanced Write Action Type from the permission request. */
    readonly type: AwaType;
    /** MembershipType from the permission request. */
    readonly membershipType: BungieMembershipType;
}
