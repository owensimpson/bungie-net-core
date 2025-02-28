/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owens1127/bungie-net-core}
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
