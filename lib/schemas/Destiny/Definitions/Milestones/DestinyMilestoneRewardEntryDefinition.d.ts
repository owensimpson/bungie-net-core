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
import { DestinyItemQuantity } from '../../DestinyItemQuantity';
import { DestinyDisplayPropertiesDefinition } from '../Common/DestinyDisplayPropertiesDefinition';
/**
 * The definition of a specific reward, which may be contained in a category of
 * rewards and that has optional information about how it is obtained.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Milestones.DestinyMilestoneRewardEntryDefinition}
*/
export interface DestinyMilestoneRewardEntryDefinition {
    /**
     * The identifier for this reward entry. Runtime data will refer to reward entries
     * by this hash. Only guaranteed unique within the specific Milestone.
    */
    readonly rewardEntryHash: number;
    /**
     * The string identifier, if you care about it. Only guaranteed unique within the
     * specific Milestone.
    */
    readonly rewardEntryIdentifier: string;
    /** The items you will get as rewards, and how much of it you'll get. */
    readonly items: DestinyItemQuantity[];
    /**
     * If this reward is redeemed at a Vendor, this is the hash of the Vendor to go to
     * in order to redeem the reward. Use this hash to look up the
     * DestinyVendorDefinition. Mapped to DestinyVendorDefinition in the manifest.
    */
    readonly vendorHash?: number;
    /**
     * For us to bother returning this info, we should be able to return some kind of
     * information about why these rewards are grouped together. This is ideally that
     * information. Look at how confident I am that this will always remain true.
    */
    readonly displayProperties: DestinyDisplayPropertiesDefinition;
    /**
     * If you want to follow BNet's ordering of these rewards, use this number within a
     * given category to order the rewards. Yeah, I know. I feel dirty too.
    */
    readonly order: number;
}
