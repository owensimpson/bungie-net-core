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

/**
 * This appears to be information used when rendering rewards. We don't currently
 * use it on BNet.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemSummaryBlockDefinition}
*/
export interface DestinyItemSummaryBlockDefinition {
  /**
   * Apparently when rendering an item in a reward, this should be used as a sort
   * priority. We're not doing it presently.
  */
  readonly sortPriority: number;
}
