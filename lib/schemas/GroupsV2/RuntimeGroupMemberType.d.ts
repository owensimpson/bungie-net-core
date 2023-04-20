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
/**
 * The member levels used by all V2 Groups API. Individual group types use their
 * own mappings in their native storage (general uses BnetDbGroupMemberType and D2
 * clans use ClanMemberLevel), but they are all translated to this in the runtime
 * api. These runtime values should NEVER be stored anywhere, so the values can be
 * changed as necessary.
 * @see {@link https://bungie-net.github.io/#/components/schemas/GroupsV2.RuntimeGroupMemberType}
*/
export declare enum RuntimeGroupMemberType {
    None = 0,
    Beginner = 1,
    Member = 2,
    Admin = 3,
    ActingFounder = 4,
    Founder = 5
}
