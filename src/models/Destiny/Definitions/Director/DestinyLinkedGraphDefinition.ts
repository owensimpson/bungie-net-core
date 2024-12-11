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

import { DestinyUnlockExpressionDefinition } from '../DestinyUnlockExpressionDefinition';
import { DestinyLinkedGraphEntryDefinition } from './DestinyLinkedGraphEntryDefinition';

/**
 * This describes links between the current graph and others, as well as when that
 * link is relevant.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Director.DestinyLinkedGraphDefinition}
 */

export interface DestinyLinkedGraphDefinition {
  readonly description: string;
  readonly name: string;
  readonly unlockExpression: DestinyUnlockExpressionDefinition;
  readonly linkedGraphId: number;
  readonly linkedGraphs: DestinyLinkedGraphEntryDefinition[];
  readonly overview: string;
}
