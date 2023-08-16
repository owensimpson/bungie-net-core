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

import { DestinyPlatformSilverComponent } from '../Components/Inventory/DestinyPlatformSilverComponent';
import { BungieMembershipType } from '../../../enums/BungieMembershipType';

/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Responses.DestinyProfileUserInfoCard} */

export interface DestinyProfileUserInfoCard {
  readonly dateLastPlayed: string;
  /**
   * If this profile is being overridden/obscured by Cross Save, this will be set to
   * true. We will still return the profile for display purposes where users need to
   * know the info: it is up to any given area of the app/site to determine if this
   * profile should still be shown.
   */
  readonly isOverridden: boolean;
  /**
   * If true, this account is hooked up as the "Primary" cross save account for one
   * or more platforms.
   */
  readonly isCrossSavePrimary: boolean;
  /**
   * This is the silver available on this Profile across any platforms on which they
   * have purchased silver.
   *
   * This is only available if you are requesting yourself.
   */
  readonly platformSilver: DestinyPlatformSilverComponent;
  /**
   * If this profile is not in a cross save pairing, this will return the game
   * versions that we believe this profile has access to.
   *
   * For the time being, we will not return this information for any membership that
   * is in a cross save pairing. The gist is that, once the pairing occurs, we do not
   * currently have a consistent way to get that information for the profile's
   * original Platform, and thus gameVersions would be too inconsistent (based on the
   * last platform they happened to play on) for the info to be useful.
   *
   * If we ever can get this data, this field will be deprecated and replaced with
   * data on the DestinyLinkedProfileResponse itself, with game versions per linked
   * Platform. But since we can't get that, we have this as a stop-gap measure for
   * getting the data in the only situation that we currently need it. This enum
   * represents a set of flags - use bitwise operators to check which of these match
   * your value.
   */
  readonly unpairedGameVersions?: number;
  /**
   * A platform specific additional display name - ex: psn Real Name, bnet Unique
   * Name, etc.
   */
  readonly supplementalDisplayName: string;
  /** URL the Icon if available. */
  readonly iconPath: string;
  /**
   * If there is a cross save override in effect, this value will tell you the type
   * that is overridding this one.
   */
  readonly crossSaveOverride: BungieMembershipType;
  /**
   * The list of Membership Types indicating the platforms on which this Membership
   * can be used.
   *
   * Not in Cross Save = its original membership type. Cross Save Primary = Any
   * membership types it is overridding, and its original membership type Cross Save
   * Overridden = Empty list
   */
  readonly applicableMembershipTypes: BungieMembershipType[];
  /** If True, this is a public user membership. */
  readonly isPublic: boolean;
  /** Type of the membership. Not necessarily the native type. */
  readonly membershipType: BungieMembershipType;
  /** Membership ID as they user is known in the Accounts service */
  readonly membershipId: string;
  /**
   * Display Name the player has chosen for themselves. The display name is optional
   * when the data type is used as input to a platform API.
   */
  readonly displayName: string;
  /** The bungie global display name, if set. */
  readonly bungieGlobalDisplayName: string;
  /** The bungie global display name code, if set. */
  readonly bungieGlobalDisplayNameCode?: number;
}
