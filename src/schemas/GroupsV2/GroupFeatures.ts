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

import { Capabilities } from './Capabilities'
import { BungieMembershipType } from '../BungieMembershipType'
import { HostGuidedGamesPermissionLevel } from './HostGuidedGamesPermissionLevel'
import { RuntimeGroupMemberType } from './RuntimeGroupMemberType'

/** @see {@link https://bungie-net.github.io/#/components/schemas/GroupsV2.GroupFeatures} */
export interface GroupFeatures {
  readonly maximumMembers: number;
  /**
   * Maximum number of groups of this type a typical membership may join. For example,
   * a user may join about 50 General groups with their Bungie.net account. They may
   * join one clan per Destiny membership.
  */
  readonly maximumMembershipsOfGroupType: number;
  /**
   * This enum represents a set of flags - use bitwise operators to check which of
   * these match your value.
  */
  readonly capabilities: Capabilities;
  readonly membershipTypes: BungieMembershipType[];
  /**
   * Minimum Member Level allowed to invite new members to group
   *
   * Always Allowed: Founder, Acting Founder
   *
   * True means admins have this power, false means they don't
   *
   * Default is false for clans, true for groups.
  */
  readonly invitePermissionOverride: boolean;
  /**
   * Minimum Member Level allowed to update group culture
   *
   * Always Allowed: Founder, Acting Founder
   *
   * True means admins have this power, false means they don't
   *
   * Default is false for clans, true for groups.
  */
  readonly updateCulturePermissionOverride: boolean;
  /**
   * Minimum Member Level allowed to host guided games
   *
   * Always Allowed: Founder, Acting Founder, Admin
   *
   * Allowed Overrides: None, Member, Beginner
   *
   * Default is Member for clans, None for groups, although this means nothing for
   * groups.
  */
  readonly hostGuidedGamePermissionOverride: HostGuidedGamesPermissionLevel;
  /**
   * Minimum Member Level allowed to update banner
   *
   * Always Allowed: Founder, Acting Founder
   *
   * True means admins have this power, false means they don't
   *
   * Default is false for clans, true for groups.
  */
  readonly updateBannerPermissionOverride: boolean;
  /**
   * Level to join a member at when accepting an invite, application, or joining an
   * open clan
   *
   * Default is Beginner.
  */
  readonly joinLevel: RuntimeGroupMemberType;
}
