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

import { RewardAvailabilityModel } from './RewardAvailabilityModel';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Tokens.UserRewardAvailabilityModel} */

export interface UserRewardAvailabilityModel {
  readonly AvailabilityModel: RewardAvailabilityModel;
  readonly IsAvailableForUser: boolean;
  readonly IsUnlockedForUser: boolean;
}
