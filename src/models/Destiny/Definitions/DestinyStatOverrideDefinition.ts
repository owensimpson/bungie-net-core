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

import { DestinyDisplayPropertiesDefinition } from './Common/DestinyDisplayPropertiesDefinition';

/**
 * Stat Groups (DestinyStatGroupDefinition) has the ability to override the
 * localized text associated with stats that are to be shown on the items with
 * which they are associated.
 *
 * This defines a specific overridden stat. You could theoretically check these
 * before rendering your stat UI, and for each stat that has an override show these
 * displayProperties instead of those on the DestinyStatDefinition.
 *
 * Or you could be like us, and skip that for now because the game has yet to
 * actually use this feature. But know that it's here, waiting for a resilliant
 * young designer to take up the mantle and make us all look foolish by showing the
 * wrong name for stats.
 *
 * Note that, if this gets used, the override will apply only to items using the
 * overriding Stat Group. Other items will still show the default stat's name/
 * description.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyStatOverrideDefinition}
 */

export interface DestinyStatOverrideDefinition {
  /**
   * The hash identifier of the stat whose display properties are being overridden.
   * Mapped to DestinyStatDefinition in the manifest.
   */
  readonly statHash: number;
  /**
   * The display properties to show instead of the base DestinyStatDefinition display
   * properties.
   */
  readonly displayProperties: DestinyDisplayPropertiesDefinition;
}
