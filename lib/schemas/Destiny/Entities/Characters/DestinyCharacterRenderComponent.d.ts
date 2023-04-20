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
import { DyeReference } from '../../DyeReference';
import { DestinyCharacterCustomization } from '../../Character/DestinyCharacterCustomization';
import { DestinyCharacterPeerView } from '../../Character/DestinyCharacterPeerView';
/**
 * Only really useful if you're attempting to render the character's current
 * appearance in 3D, this returns a bare minimum of information, pre-aggregated,
 * that you'll need to perform that rendering. Note that you need to combine this
 * with other 3D assets and data from our servers.
 *
 * Examine the Javascript returned by https://bungie.net/sharedbundle/spasm to see
 * how we use this data, but be warned: the rabbit hole goes pretty deep.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Entities.Characters.DestinyCharacterRenderComponent}
*/
export interface DestinyCharacterRenderComponent {
    /**
     * Custom dyes, calculated by iterating over the character's equipped items. Useful
     * for pre-fetching all of the dye data needed from our server.
    */
    readonly customDyes: DyeReference[];
    /**
     * This is actually something that Spasm.js *doesn't* do right now, and that we don'
     * t return assets for yet. This is the data about what character customization
     * options you picked. You can combine this with
     * DestinyCharacterCustomizationOptionDefinition to show some cool info, and
     * hopefully someday to actually render a user's face in 3D. We'll see if we ever
     * end up with time for that.
    */
    readonly customization: DestinyCharacterCustomization;
    /**
     * A minimal view of:
     *
     * - Equipped items
     *
     * - The rendering-related custom options on those equipped items
     *
     * Combined, that should be enough to render all of the items on the equipped
     * character.
    */
    readonly peerView: DestinyCharacterPeerView;
}
