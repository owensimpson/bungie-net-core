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

import { DestinyGender } from '../../DestinyGender';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Records.DestinyRecordTitleBlock} */

export interface DestinyRecordTitleBlock {
  readonly hasTitle: boolean;
  readonly titlesByGender: { [key in DestinyGender]: string };
  /**
   * For those who prefer to use the definitions. Mapped to DestinyGenderDefinition
   * in the manifest.
   */
  readonly titlesByGenderHash: { [key: number]: string };
  /** Mapped to DestinyRecordDefinition in the manifest. */
  readonly gildingTrackingRecordHash?: number;
}
