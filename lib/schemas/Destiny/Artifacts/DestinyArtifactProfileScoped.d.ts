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
import { DestinyProgression } from '../DestinyProgression';
/**
 * Represents a Seasonal Artifact and all data related to it for the requested
 * Account.
 *
 * It can be combined with Character-scoped data for a full picture of what a
 * character has available/has chosen, or just these settings can be used for
 * overview information.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Artifacts.DestinyArtifactProfileScoped}
*/
export interface DestinyArtifactProfileScoped {
    /** Mapped to DestinyArtifactDefinition in the manifest. */
    readonly artifactHash: number;
    readonly pointProgression: DestinyProgression;
    readonly pointsAcquired: number;
    readonly powerBonusProgression: DestinyProgression;
    readonly powerBonus: number;
}
