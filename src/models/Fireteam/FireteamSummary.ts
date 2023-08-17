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

import { FireteamPlatform } from './FireteamPlatform';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Fireteam.FireteamSummary} */

export interface FireteamSummary {
  readonly fireteamId: string;
  readonly groupId: string;
  readonly platform: FireteamPlatform;
  readonly activityType: number;
  readonly isImmediate: boolean;
  readonly scheduledTime?: string;
  readonly ownerMembershipId: string;
  readonly playerSlotCount: number;
  readonly alternateSlotCount?: number;
  readonly availablePlayerSlotCount: number;
  readonly availableAlternateSlotCount: number;
  readonly title: string;
  readonly dateCreated: string;
  readonly dateModified?: string;
  readonly isPublic: boolean;
  readonly locale: string;
  readonly isValid: boolean;
  readonly datePlayerModified: string;
  readonly titleBeforeModeration: string;
  /** Mapped to DestinyGuardianRankDefinition in the manifest. */
  readonly ownerCurrentGuardianRankSnapshot: number;
  /** Mapped to DestinyGuardianRankDefinition in the manifest. */
  readonly ownerHighestLifetimeGuardianRankSnapshot: number;
  readonly ownerTotalCommendationScoreSnapshot: number;
}
