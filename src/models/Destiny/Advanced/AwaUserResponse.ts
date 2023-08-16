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

import { AwaUserSelection } from '../../../enums/Destiny/Advanced/AwaUserSelection';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Advanced.AwaUserResponse} */

export interface AwaUserResponse {
  /** Indication of the selection the user has made (Approving or rejecting the action) */
  readonly selection: AwaUserSelection;
  /** Correlation ID of the request */
  readonly correlationId: string;
  /** Secret nonce received via the PUSH notification. */
  readonly nonce: number[];
}
