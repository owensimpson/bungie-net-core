/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
/** @see {@link https://bungie-net.github.io/#/components/schemas/GroupsV2.GroupOptionsEditAction} */
export interface GroupOptionsEditAction {
    /**
     * Minimum Member Level allowed to invite new members to group
     *
     * Always Allowed: Founder, Acting Founder
     *
     * True means admins have this power, false means they don't
     *
     * Default is false for clans, true for groups.
     */
    readonly InvitePermissionOverride?: boolean;
    /**
     * Minimum Member Level allowed to update group culture
     *
     * Always Allowed: Founder, Acting Founder
     *
     * True means admins have this power, false means they don't
     *
     * Default is false for clans, true for groups.
     */
    readonly UpdateCulturePermissionOverride?: boolean;
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
    readonly HostGuidedGamePermissionOverride?: number;
    /**
     * Minimum Member Level allowed to update banner
     *
     * Always Allowed: Founder, Acting Founder
     *
     * True means admins have this power, false means they don't
     *
     * Default is false for clans, true for groups.
     */
    readonly UpdateBannerPermissionOverride?: boolean;
    /**
     * Level to join a member at when accepting an invite, application, or joining an
     * open clan
     *
     * Default is Beginner.
     */
    readonly JoinLevel?: number;
}
