/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.9
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
/** @see {@link https://bungie-net.github.io/#/components/schemas/GroupsV2.GroupEditAction} */
export interface GroupEditAction {
    readonly name: string;
    readonly about: string;
    readonly motto: string;
    readonly theme: string;
    readonly avatarImageIndex?: number;
    readonly tags: string;
    readonly isPublic?: boolean;
    readonly membershipOption?: number;
    readonly isPublicTopicAdminOnly?: boolean;
    readonly allowChat?: boolean;
    readonly chatSecurity?: number;
    readonly callsign: string;
    readonly locale: string;
    readonly homepage?: number;
    readonly enableInvitationMessagingForAdmins?: boolean;
    readonly defaultPublicity?: number;
}
