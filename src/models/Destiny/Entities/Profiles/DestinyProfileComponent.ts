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

import { UserInfoCard } from '../../../User/UserInfoCard';
import { DestinyGameVersions } from '../../DestinyGameVersions';

/**
 * The most essential summary information about a Profile (in Destiny 1, we called
 * these "Accounts").
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Entities.Profiles.DestinyProfileComponent}
 */

export interface DestinyProfileComponent {
  /**
   * If you need to render the Profile (their platform name, icon, etc...) somewhere,
   * this property contains that information.
   */
  readonly userInfo: UserInfoCard;
  /** The last time the user played with any character on this Profile. */
  readonly dateLastPlayed: string;
  /**
   * If you want to know what expansions they own, this will contain that data.
   *
   * IMPORTANT: This field may not return the data you're interested in for Cross-
   * Saved users. It returns the last ownership data we saw for this account - which
   * is to say, what they've purchased on the platform on which they last played,
   * which now could be a different platform.
   *
   * If you don't care about per-platform ownership and only care about whatever
   * platform it seems they are playing on most recently, then this should be "good
   * enough." Otherwise, this should be considered deprecated. We do not have a good
   * alternative to provide at this time with platform specific ownership data for
   * DLC. This enum represents a set of flags - use bitwise operators to check which
   * of these match your value.
   */
  readonly versionsOwned: DestinyGameVersions;
  /** A list of the character IDs, for further querying on your part. */
  readonly characterIds: string[];
  /**
   * A list of seasons that this profile owns. Unlike versionsOwned, these stay with
   * the profile across Platforms, and thus will be valid.
   *
   * It turns out that Stadia Pro subscriptions will give access to seasons but only
   * while playing on Stadia and with an active subscription. So some users (users
   * who have Stadia Pro but choose to play on some other platform) won't see these
   * as available: it will be whatever seasons are available for the platform on
   * which they last played. Mapped to DestinySeasonDefinition in the manifest.
   */
  readonly seasonHashes: number[];
  /**
   * A list of hashes for event cards that a profile owns. Unlike most values in
   * versionsOwned, these stay with the profile across all platforms. Mapped to
   * DestinyEventCardDefinition in the manifest.
   */
  readonly eventCardHashesOwned: number[];
  /**
   * If populated, this is a reference to the season that is currently active. Mapped
   * to DestinySeasonDefinition in the manifest.
   */
  readonly currentSeasonHash?: number;
  /** If populated, this is the reward power cap for the current season. */
  readonly currentSeasonRewardPowerCap?: number;
  /**
   * If populated, this is a reference to the event card that is currently active.
   * Mapped to DestinyEventCardDefinition in the manifest.
   */
  readonly activeEventCardHash?: number;
  /**
   * The 'current' Guardian Rank value, which starts at rank 1. This rank value will
   * drop at the start of a new season to your 'renewed' rank from the previous
   * season. Mapped to DestinyGuardianRankDefinition in the manifest.
   */
  readonly currentGuardianRank: number;
  /**
   * The 'lifetime highest' Guardian Rank value, which starts at rank 1. This rank
   * value should never go down. Mapped to DestinyGuardianRankDefinition in the
   * manifest.
   */
  readonly lifetimeHighestGuardianRank: number;
  /**
   * The seasonal 'renewed' Guardian Rank value. This rank value resets at the start
   * of each new season to the highest-earned non-advanced rank. Mapped to
   * DestinyGuardianRankDefinition in the manifest.
   */
  readonly renewedGuardianRank: number;
}
