/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owensimpson/bungie-net-core}
 * Do not edit these files manually.
 */
//

import { DestinyObjectiveGrantStyle } from '../../../enums/Destiny/DestinyObjectiveGrantStyle';

/**
 * Defines the conditions under which an intrinsic perk is applied while
 * participating in an Objective.
 *
 * These perks will generally not be benefit-granting perks, but rather a perk that
 * modifies gameplay in some interesting way.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyObjectivePerkEntryDefinition}
 */

export interface DestinyObjectivePerkEntryDefinition {
  /**
   * The hash identifier of the DestinySandboxPerkDefinition that will be applied to
   * the character. Mapped to DestinySandboxPerkDefinition in the manifest.
   */
  readonly perkHash: number;
  /**
   * An enumeration indicating whether it will be applied as long as the Objective is
   * active, when it's completed, or until it's completed.
   */
  readonly style: DestinyObjectiveGrantStyle;
}
