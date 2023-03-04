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
import { DestinyEquipItemResult } from './DestinyEquipItemResult';
/**
 * The results of a bulk Equipping operation performed through the Destiny API.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyEquipItemResults}
 */
export interface DestinyEquipItemResults {
    readonly equipResults: DestinyEquipItemResult[];
}
