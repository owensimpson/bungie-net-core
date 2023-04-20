/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.1
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { BungieMembershipType } from '../BungieMembershipType';

/**
 * Very basic info about a user as returned by the Account server.
 * @see {@link https://bungie-net.github.io/#/components/schemas/User.UserMembership}
 */
export interface UserMembership {
  /** Type of the membership. Not necessarily the native type. */
  readonly membershipType: BungieMembershipType;
  /** Membership ID as they user is known in the Accounts service */
  readonly membershipId: string;
  /**
   * Display Name the player has chosen for themselves. The display name is optional
   * when the data type is used as input to a platform API.
   */
  readonly displayName: string;
  /** The bungie global display name, if set. */
  readonly bungieGlobalDisplayName: string;
  /** The bungie global display name code, if set. */
  readonly bungieGlobalDisplayNameCode?: number;
}
