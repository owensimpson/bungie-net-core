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

import { DestinyComponentType } from './Destiny/DestinyComponentType';
import { DictionaryComponentResponse } from '../generic/DictionaryComponentResponse';
import { ConditionalComponent } from '../generic/ComponentTypes';
import { DestinyItemInstanceComponent } from './Destiny/Entities/Items/DestinyItemInstanceComponent';
import { DestinyItemRenderComponent } from './Destiny/Entities/Items/DestinyItemRenderComponent';
import { DestinyItemStatsComponent } from './Destiny/Entities/Items/DestinyItemStatsComponent';
import { DestinyItemSocketsComponent } from './Destiny/Entities/Items/DestinyItemSocketsComponent';
import { DestinyItemReusablePlugsComponent } from './Destiny/Components/Items/DestinyItemReusablePlugsComponent';
import { DestinyItemPlugObjectivesComponent } from './Destiny/Components/Items/DestinyItemPlugObjectivesComponent';
import { DestinyItemTalentGridComponent } from './Destiny/Entities/Items/DestinyItemTalentGridComponent';
import { DestinyItemPlugComponent } from './Destiny/Components/Items/DestinyItemPlugComponent';
import { DestinyItemObjectivesComponent } from './Destiny/Entities/Items/DestinyItemObjectivesComponent';
import { DestinyItemPerksComponent } from './Destiny/Entities/Items/DestinyItemPerksComponent';

/** @see {@link https://bungie-net.github.io/#/components/schemas/DestinyItemComponentSetOfint64} */
export interface DestinyItemComponentSetOfint64<T extends DestinyComponentType[]> {
  readonly instances: ConditionalComponent<
    T,
    DestinyComponentType.ItemInstances,
    DictionaryComponentResponse<string, DestinyItemInstanceComponent>
  >;
  readonly renderData: ConditionalComponent<
    T,
    DestinyComponentType.ItemRenderData,
    DictionaryComponentResponse<string, DestinyItemRenderComponent>
  >;
  readonly stats: ConditionalComponent<
    T,
    DestinyComponentType.ItemStats,
    DictionaryComponentResponse<string, DestinyItemStatsComponent>
  >;
  readonly sockets: ConditionalComponent<
    T,
    DestinyComponentType.ItemSockets,
    DictionaryComponentResponse<string, DestinyItemSocketsComponent>
  >;
  readonly reusablePlugs: ConditionalComponent<
    T,
    DestinyComponentType.ItemReusablePlugs,
    DictionaryComponentResponse<string, DestinyItemReusablePlugsComponent>
  >;
  readonly plugObjectives: ConditionalComponent<
    T,
    DestinyComponentType.ItemPlugObjectives,
    DictionaryComponentResponse<string, DestinyItemPlugObjectivesComponent>
  >;
  readonly talentGrids: ConditionalComponent<
    T,
    DestinyComponentType.ItemTalentGrids,
    DictionaryComponentResponse<string, DestinyItemTalentGridComponent>
  >;
  readonly plugStates: ConditionalComponent<
    T,
    DestinyComponentType.ItemPlugStates,
    DictionaryComponentResponse<string, DestinyItemPlugComponent>
  >;
  readonly objectives: ConditionalComponent<
    T,
    DestinyComponentType.ItemObjectives,
    DictionaryComponentResponse<string, DestinyItemObjectivesComponent>
  >;
  readonly perks: ConditionalComponent<
    T,
    DestinyComponentType.ItemPerks,
    DictionaryComponentResponse<string, DestinyItemPerksComponent>
  >;
}
