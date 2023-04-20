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
import { DestinyItemSocketState } from './DestinyItemSocketState';
/**
 * Instanced items can have sockets, which are slots on the item where plugs can be
 * inserted.
 *
 * Sockets are a bit complex: be sure to examine the documentation on the
 * DestinyInventoryItemDefinition's "socket" block and elsewhere on these objects
 * for more details.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Entities.Items.DestinyItemSocketsComponent}
*/
export interface DestinyItemSocketsComponent {
    /** The list of all sockets on the item, and their status information. */
    readonly sockets: DestinyItemSocketState[];
}
