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
/**
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Forum.ForumTopicsCategoryFiltersEnum}
*/
export declare enum ForumTopicsCategoryFiltersEnum {
    None = 0,
    Links = 1,
    Questions = 2,
    AnsweredQuestions = 4,
    Media = 8,
    TextOnly = 16,
    Announcement = 32,
    BungieOfficial = 64,
    Polls = 128
}
