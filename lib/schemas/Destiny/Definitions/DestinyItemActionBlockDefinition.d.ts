/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.7
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
import { DestinyItemActionRequiredItemDefinition } from './DestinyItemActionRequiredItemDefinition';
import { DestinyProgressionRewardDefinition } from './DestinyProgressionRewardDefinition';
/**
 * If an item can have an action performed on it (like "Dismantle"), it will be
 * defined here if you care.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemActionBlockDefinition}
*/
export interface DestinyItemActionBlockDefinition {
    /** Localized text for the verb of the action being performed. */
    readonly verbName: string;
    /** Localized text describing the action being performed. */
    readonly verbDescription: string;
    /** The content has this property, however it's not entirely clear how it is used. */
    readonly isPositive: boolean;
    /**
     * If the action has an overlay screen associated with it, this is the name of that
     * screen. Unfortunately, we cannot return the screen's data itself.
    */
    readonly overlayScreenName: string;
    /** The icon associated with the overlay screen for the action, if any. */
    readonly overlayIcon: string;
    /** The number of seconds to delay before allowing this action to be performed again. */
    readonly requiredCooldownSeconds: number;
    /**
     * If the action requires other items to exist or be destroyed, this is the list of
     * those items and requirements.
    */
    readonly requiredItems: DestinyItemActionRequiredItemDefinition[];
    /**
     * If performing this action earns you Progression, this is the list of
     * progressions and values granted for those progressions by performing this action.
    */
    readonly progressionRewards: DestinyProgressionRewardDefinition[];
    /** The internal identifier for the action. */
    readonly actionTypeLabel: string;
    /**
     * Theoretically, an item could have a localized string for a hint about the
     * location in which the action should be performed. In practice, no items yet have
     * this property.
    */
    readonly requiredLocation: string;
    /**
     * The identifier hash for the Cooldown associated with this action. We have not
     * pulled this data yet for you to have more data to use for cooldowns.
    */
    readonly requiredCooldownHash: number;
    /** If true, the item is deleted when the action completes. */
    readonly deleteOnAction: boolean;
    /** If true, the entire stack is deleted when the action completes. */
    readonly consumeEntireStack: boolean;
    /**
     * If true, this action will be performed as soon as you earn this item. Some
     * rewards work this way, providing you a single item to pick up from a reward-
     * granting vendor in-game and then immediately consuming itself to provide you
     * multiple items.
    */
    readonly useOnAcquire: boolean;
}
