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

import { DestinyPerkReference } from '../../Perks/DestinyPerkReference';

/**
 * Instanced items can have perks: benefits that the item bestows.
 *
 * These are related to DestinySandboxPerkDefinition, and sometimes - but not
 * always - have human readable info. When they do, they are the icons and text
 * that you see in an item's tooltip.
 *
 * Talent Grids, Sockets, and the item itself can apply Perks, which are then
 * summarized here for your convenience.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Entities.Items.DestinyItemPerksComponent}
 */
export interface DestinyItemPerksComponent {
  /**
   * The list of perks to display in an item tooltip - and whether or not they have
   * been activated.
   */
  readonly perks: DestinyPerkReference[];
}
