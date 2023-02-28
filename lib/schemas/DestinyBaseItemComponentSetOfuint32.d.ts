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
import { DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent } from './DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent';
import { DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent } from './DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent';
/** @see {@link https://bungie-net.github.io/#/components/schemas/DestinyBaseItemComponentSetOfuint32} */
export interface DestinyBaseItemComponentSetOfuint32 {
    readonly objectives: DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent;
    readonly perks: DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent;
}
