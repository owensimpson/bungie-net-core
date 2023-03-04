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
 * Talent nodes have requirements that must be met before they can be activated.
 *
 * This describes the material costs, the Level of the Talent Grid's progression
 * required, and other conditional information that limits whether a talent node
 * can be activated.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyNodeActivationRequirement}
 */
export interface DestinyNodeActivationRequirement {
    /**
     * The Progression level on the Talent Grid required to activate this node.
     *
     * See DestinyTalentGridDefinition.progressionHash for the related Progression, and
     * read DestinyProgressionDefinition's documentation to learn more about
     * Progressions.
     */
    readonly gridLevel: number;
    /**
     * The list of hash identifiers for material requirement sets: materials that are
     * required for the node to be activated. See
     * DestinyMaterialRequirementSetDefinition for more information about material
     * requirements.
     *
     * In this case, only a single DestinyMaterialRequirementSetDefinition will be
     * chosen from this list, and we won't know which one will be chosen until an
     * instance of the item is created. Mapped to
     * DestinyMaterialRequirementSetDefinition in the manifest.
     */
    readonly materialRequirementHashes: number[];
}
