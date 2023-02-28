/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
import { DestinyDisplayPropertiesDefinition } from './Common/DestinyDisplayPropertiesDefinition';
/**
 * Human readable data about the bubble. Combine with DestinyBubbleDefinition - see
 * DestinyDestinationDefinition.bubbleSettings for more information.
 *
 * DEPRECATED - Just use bubbles.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyDestinationBubbleSettingDefinition}
*/
export interface DestinyDestinationBubbleSettingDefinition {
    readonly displayProperties: DestinyDisplayPropertiesDefinition;
}
