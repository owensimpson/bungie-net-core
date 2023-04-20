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

import { SocketTypeActionType } from '../../SocketTypeActionType'

/**
 * Data related to what happens while a plug is being inserted, mostly for UI
 * purposes.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Sockets.DestinyInsertPlugActionDefinition}
*/
export interface DestinyInsertPlugActionDefinition {
  /**
   * How long it takes for the Plugging of the item to be completed once it is
   * initiated, if you care.
  */
  readonly actionExecuteSeconds: number;
  /**
   * The type of action being performed when you act on this Socket Type. The most
   * common value is "insert plug", but there are others as well (for instance, a "
   * Masterwork" socket may allow for Re-initialization, and an Infusion socket
   * allows for items to be consumed to upgrade the item)
  */
  readonly actionType: SocketTypeActionType;
}
