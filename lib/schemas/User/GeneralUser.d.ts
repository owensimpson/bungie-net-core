/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.6
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { UserToUserContext } from './UserToUserContext';
/** @see {@link https://bungie-net.github.io/#/components/schemas/User.GeneralUser} */
export interface GeneralUser {
    readonly membershipId: string;
    readonly uniqueName: string;
    readonly normalizedName: string;
    readonly displayName: string;
    readonly profilePicture: number;
    readonly profileTheme: number;
    readonly userTitle: number;
    readonly successMessageFlags: string;
    readonly isDeleted: boolean;
    readonly about: string;
    readonly firstAccess?: string;
    readonly lastUpdate?: string;
    readonly legacyPortalUID?: string;
    readonly context: UserToUserContext;
    readonly psnDisplayName: string;
    readonly xboxDisplayName: string;
    readonly fbDisplayName: string;
    readonly showActivity?: boolean;
    readonly locale: string;
    readonly localeInheritDefault: boolean;
    readonly lastBanReportId?: string;
    readonly showGroupMessaging: boolean;
    readonly profilePicturePath: string;
    readonly profilePictureWidePath: string;
    readonly profileThemeName: string;
    readonly userTitleDisplay: string;
    readonly statusText: string;
    readonly statusDate: string;
    readonly profileBanExpire?: string;
    readonly blizzardDisplayName: string;
    readonly steamDisplayName: string;
    readonly stadiaDisplayName: string;
    readonly twitchDisplayName: string;
    readonly cachedBungieGlobalDisplayName: string;
    readonly cachedBungieGlobalDisplayNameCode?: number;
    readonly egsDisplayName: string;
}
