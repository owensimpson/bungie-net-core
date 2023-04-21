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
/**
 * A reference to an Activity Modifier from another entity, such as an Activity (
 * for now, just Activities).
 *
 * This defines some
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyActivityModifierReferenceDefinition}
*/
export interface DestinyActivityModifierReferenceDefinition {
    /**
     * The hash identifier for the DestinyActivityModifierDefinition referenced by this
     * activity. Mapped to DestinyActivityModifierDefinition in the manifest.
    */
    readonly activityModifierHash: number;
}
