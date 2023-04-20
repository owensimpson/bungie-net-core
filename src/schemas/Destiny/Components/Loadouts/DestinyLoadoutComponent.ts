/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.7
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { DestinyLoadoutItemComponent } from './DestinyLoadoutItemComponent';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Components.Loadouts.DestinyLoadoutComponent} */
export interface DestinyLoadoutComponent {
  /** Mapped to DestinyLoadoutColorDefinition in the manifest. */
  readonly colorHash: number;
  /** Mapped to DestinyLoadoutIconDefinition in the manifest. */
  readonly iconHash: number;
  /** Mapped to DestinyLoadoutNameDefinition in the manifest. */
  readonly nameHash: number;
  readonly items: DestinyLoadoutItemComponent[];
}
