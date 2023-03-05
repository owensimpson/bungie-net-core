/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { GroupType } from './GroupType';
import { ChatSecuritySetting } from './ChatSecuritySetting';
import { GroupHomepage } from './GroupHomepage';
import { MembershipOption } from './MembershipOption';
import { GroupPostPublicity } from './GroupPostPublicity';
import { GroupFeatures } from './GroupFeatures';
import { GroupV2ClanInfoAndInvestment } from './GroupV2ClanInfoAndInvestment';
/** @see {@link https://bungie-net.github.io/#/components/schemas/GroupsV2.GroupV2} */
export interface GroupV2 {
    readonly groupId: string;
    readonly name: string;
    readonly groupType: GroupType;
    readonly membershipIdCreated: string;
    readonly creationDate: string;
    readonly modificationDate: string;
    readonly about: string;
    readonly tags: string[];
    readonly memberCount: number;
    readonly isPublic: boolean;
    readonly isPublicTopicAdminOnly: boolean;
    readonly motto: string;
    readonly allowChat: boolean;
    readonly isDefaultPostPublic: boolean;
    readonly chatSecurity: ChatSecuritySetting;
    readonly locale: string;
    readonly avatarImageIndex: number;
    readonly homepage: GroupHomepage;
    readonly membershipOption: MembershipOption;
    readonly defaultPublicity: GroupPostPublicity;
    readonly theme: string;
    readonly bannerPath: string;
    readonly avatarPath: string;
    readonly conversationId: string;
    readonly enableInvitationMessagingForAdmins: boolean;
    readonly banExpireDate?: string;
    readonly features: GroupFeatures;
    readonly clanInfo: GroupV2ClanInfoAndInvestment;
}
