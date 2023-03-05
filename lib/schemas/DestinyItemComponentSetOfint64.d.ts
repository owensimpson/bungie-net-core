/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent } from './DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent';
import { DictionaryComponentResponseOfint64AndDestinyItemRenderComponent } from './DictionaryComponentResponseOfint64AndDestinyItemRenderComponent';
import { DictionaryComponentResponseOfint64AndDestinyItemStatsComponent } from './DictionaryComponentResponseOfint64AndDestinyItemStatsComponent';
import { DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent } from './DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent';
import { DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent } from './DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent';
import { DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent } from './DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent';
import { DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent } from './DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent';
import { DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent } from './DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent';
import { DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent } from './DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent';
import { DictionaryComponentResponseOfint64AndDestinyItemPerksComponent } from './DictionaryComponentResponseOfint64AndDestinyItemPerksComponent';
/** @see {@link https://bungie-net.github.io/#/components/schemas/DestinyItemComponentSetOfint64} */
export interface DestinyItemComponentSetOfint64 {
    readonly instances: DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent;
    readonly renderData: DictionaryComponentResponseOfint64AndDestinyItemRenderComponent;
    readonly stats: DictionaryComponentResponseOfint64AndDestinyItemStatsComponent;
    readonly sockets: DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent;
    readonly reusablePlugs: DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent;
    readonly plugObjectives: DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent;
    readonly talentGrids: DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent;
    readonly plugStates: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent;
    readonly objectives: DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent;
    readonly perks: DictionaryComponentResponseOfint64AndDestinyItemPerksComponent;
}
