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
 * Raw data about the customization options chosen for a character's face and
 * appearance.
 *
 * You can look up the relevant class/race/gender combo in
 * DestinyCharacterCustomizationOptionDefinition for the character, and then look
 * up these values within the CustomizationOptions found to pull some data about
 * their choices. Warning: not all of that data is meaningful. Some data has useful
 * icons. Others have nothing, and are only meant for 3D rendering purposes (which
 * we sadly do not expose yet)
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Character.DestinyCharacterCustomization}
*/
export interface DestinyCharacterCustomization {
    readonly personality: number;
    readonly face: number;
    readonly skinColor: number;
    readonly lipColor: number;
    readonly eyeColor: number;
    readonly hairColors: number[];
    readonly featureColors: number[];
    readonly decalColor: number;
    readonly wearHelmet: boolean;
    readonly hairIndex: number;
    readonly featureIndex: number;
    readonly decalIndex: number;
}
