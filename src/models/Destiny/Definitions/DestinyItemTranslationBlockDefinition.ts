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

import { DyeReference } from '../DyeReference';
import { DestinyGearArtArrangementReference } from './DestinyGearArtArrangementReference';

/**
 * This Block defines the rendering data associated with the item, if any.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemTranslationBlockDefinition}
 */

export interface DestinyItemTranslationBlockDefinition {
  readonly weaponPatternIdentifier: string;
  /** Mapped to DestinySandboxPatternDefinition in the manifest. */
  readonly weaponPatternHash: number;
  readonly defaultDyes: DyeReference[];
  readonly lockedDyes: DyeReference[];
  readonly customDyes: DyeReference[];
  readonly arrangements: DestinyGearArtArrangementReference[];
  readonly hasGeometry: boolean;
}
