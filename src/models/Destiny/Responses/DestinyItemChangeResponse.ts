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

import { DestinyItemResponse } from './DestinyItemResponse';
import { DestinyComponentType } from '../DestinyComponentType';
import { DestinyItemComponent } from '../Entities/Items/DestinyItemComponent';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Responses.DestinyItemChangeResponse} */

export interface DestinyItemChangeResponse {
  readonly item: DestinyItemResponse<DestinyComponentType[]>;
  /** Items that appeared in the inventory possibly as a result of an action. */
  readonly addedInventoryItems: DestinyItemComponent[];
  /** Items that disappeared from the inventory possibly as a result of an action. */
  readonly removedInventoryItems: DestinyItemComponent[];
}
