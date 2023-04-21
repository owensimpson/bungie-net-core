/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.9
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { DestinyDisplayPropertiesDefinition } from './Common/DestinyDisplayPropertiesDefinition';
/**
 * Basic identifying data about the bubble. Combine with
 * DestinyDestinationBubbleSettingDefinition - see DestinyDestinationDefinition.
 * bubbleSettings for more information.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyBubbleDefinition}
*/
export interface DestinyBubbleDefinition {
    /**
     * The identifier for the bubble: only guaranteed to be unique within the
     * Destination.
    */
    readonly hash: number;
    /**
     * The display properties of this bubble, so you don't have to look them up in a
     * separate list anymore.
    */
    readonly displayProperties: DestinyDisplayPropertiesDefinition;
}
