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

import { DestinyInsertPlugsRequestEntry } from './DestinyInsertPlugsRequestEntry';
import { BungieMembershipType } from '../../../../enums/BungieMembershipType';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Requests.Actions.DestinyInsertPlugsFreeActionRequest} */

export interface DestinyInsertPlugsFreeActionRequest {
  /** The plugs being inserted. */
  readonly plug: DestinyInsertPlugsRequestEntry;
  /** The instance ID of the item for this action request. */
  readonly itemId: string;
  readonly characterId: string;
  readonly membershipType: BungieMembershipType;
}
