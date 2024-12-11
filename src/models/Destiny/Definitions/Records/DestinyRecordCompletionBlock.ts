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

import { DestinyRecordToastStyle } from '../../DestinyRecordToastStyle';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Records.DestinyRecordCompletionBlock} */

export interface DestinyRecordCompletionBlock {
  /**
   * The number of objectives that must be completed before the objective is
   * considered "complete"
   */
  readonly partialCompletionObjectiveCountThreshold: number;
  readonly ScoreValue: number;
  readonly shouldFireToast: boolean;
  readonly toastStyle: DestinyRecordToastStyle;
}
