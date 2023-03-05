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
import { DestinySeasonPreviewImageDefinition } from './DestinySeasonPreviewImageDefinition';
/**
 * Defines the promotional text, images, and links to preview this season.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Seasons.DestinySeasonPreviewDefinition}
 */
export interface DestinySeasonPreviewDefinition {
    /** A localized description of the season. */
    readonly description: string;
    /**
     * A relative path to learn more about the season. Web browsers should be
     * automatically redirected to the user's Bungie.net locale. For example: "/
     * SeasonOfTheChosen" will redirect to "/7/en/Seasons/SeasonOfTheChosen" for
     * English users.
     */
    readonly linkPath: string;
    /** An optional link to a localized video, probably YouTube. */
    readonly videoLink: string;
    /**
     * A list of images to preview the seasonal content. Should have at least three to
     * show.
     */
    readonly images: DestinySeasonPreviewImageDefinition[];
}
