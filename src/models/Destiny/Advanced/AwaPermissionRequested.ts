/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { AwaType } from '../../../enums/Destiny/Advanced/AwaType';
import { BungieMembershipType } from '../../../enums/BungieMembershipType';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Advanced.AwaPermissionRequested} */

export interface AwaPermissionRequested {
  /** Type of advanced write action. */
  readonly type: AwaType;
  /**
   * Item instance ID the action shall be applied to. This is optional for all but a
   * new AwaType values. Rule of thumb is to provide the item instance ID if one is
   * available.
   */
  readonly affectedItemId?: string;
  /** Destiny membership type of the account to modify. */
  readonly membershipType: BungieMembershipType;
  /** Destiny character ID, if applicable, that will be affected by the action. */
  readonly characterId?: string;
}
