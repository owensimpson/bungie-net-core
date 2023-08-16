/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Do not edit these files manually.
 */
//

import { DestinyRecordDefinition } from '../Destiny/Definitions/Records/DestinyRecordDefinition';
import { CollectibleDefinitions } from './CollectibleDefinitions';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Tokens.RewardAvailabilityModel} */

export interface RewardAvailabilityModel {
  readonly HasExistingCode: boolean;
  readonly RecordDefinitions: DestinyRecordDefinition[];
  readonly CollectibleDefinitions: CollectibleDefinitions[];
  readonly IsOffer: boolean;
  readonly HasOffer: boolean;
  readonly OfferApplied: boolean;
  readonly DecryptedToken: string;
  readonly IsLoyaltyReward: boolean;
  readonly ShopifyEndDate?: string;
  readonly GameEarnByDate: string;
  readonly RedemptionEndDate: string;
}
