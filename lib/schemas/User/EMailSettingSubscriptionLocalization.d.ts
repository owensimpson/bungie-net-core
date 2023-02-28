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
/**
 * Localized text relevant to a given EMail setting in a given localization. Extra
 * settings specifically for subscriptions.
 * @see {@link https://bungie-net.github.io/#/components/schemas/User.EMailSettingSubscriptionLocalization}
*/
export interface EMailSettingSubscriptionLocalization {
    readonly unknownUserDescription: string;
    readonly registeredUserDescription: string;
    readonly unregisteredUserDescription: string;
    readonly unknownUserActionText: string;
    readonly knownUserActionText: string;
    readonly title: string;
    readonly description: string;
}
