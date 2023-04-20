/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.3
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { DestinyArtifactTier } from './DestinyArtifactTier';
/** @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Artifacts.DestinyArtifactCharacterScoped} */
export interface DestinyArtifactCharacterScoped {
    /** Mapped to DestinyArtifactDefinition in the manifest. */
    readonly artifactHash: number;
    readonly pointsUsed: number;
    readonly resetCount: number;
    readonly tiers: DestinyArtifactTier[];
}
