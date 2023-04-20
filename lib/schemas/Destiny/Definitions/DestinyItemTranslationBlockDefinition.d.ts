/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.1
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { DyeReference } from '../DyeReference';
import { DestinyGearArtArrangementReference } from './DestinyGearArtArrangementReference';
/**
 * This Block defines the rendering data associated with the item, if any.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemTranslationBlockDefinition}
*/
export interface DestinyItemTranslationBlockDefinition {
    readonly weaponPatternIdentifier: string;
    /** Mapped to DestinySandboxPatternDefinition in the manifest. */
    readonly weaponPatternHash: number;
    readonly defaultDyes: DyeReference[];
    readonly lockedDyes: DyeReference[];
    readonly customDyes: DyeReference[];
    readonly arrangements: DestinyGearArtArrangementReference[];
    readonly hasGeometry: boolean;
}
