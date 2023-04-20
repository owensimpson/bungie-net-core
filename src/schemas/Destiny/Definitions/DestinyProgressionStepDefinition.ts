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

import { DestinyProgressionStepDisplayEffect } from '../DestinyProgressionStepDisplayEffect'
import { DestinyItemQuantity } from '../DestinyItemQuantity'

/**
 * This defines a single Step in a progression (which roughly equates to a level.
 * See DestinyProgressionDefinition for caveats).
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyProgressionStepDefinition}
*/
export interface DestinyProgressionStepDefinition {
  /**
   * Very rarely, Progressions will have localized text describing the Level of the
   * progression. This will be that localized text, if it exists. Otherwise, the
   * standard appears to be to simply show the level numerically.
  */
  readonly stepName: string;
  /**
   * This appears to be, when you "level up", whether a visual effect will display
   * and on what entity. See DestinyProgressionStepDisplayEffect for slightly more
   * info.
  */
  readonly displayEffectType: DestinyProgressionStepDisplayEffect;
  /**
   * The total amount of progression points/"experience" you will need to initially
   * reach this step. If this is the last step and the progression is repeating
   * indefinitely (DestinyProgressionDefinition.repeatLastStep), this will also be
   * the progress needed to level it up further by repeating this step again.
  */
  readonly progressTotal: number;
  /** A listing of items rewarded as a result of reaching this level. */
  readonly rewardItems: DestinyItemQuantity[];
  /**
   * If this progression step has a specific icon related to it, this is the icon to
   * show.
  */
  readonly icon: string;
}
