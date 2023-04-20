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
import { EquippingItemBlockAttributes } from '../EquippingItemBlockAttributes';
import { DestinyAmmunitionType } from '../DestinyAmmunitionType';
/**
 * Items that can be equipped define this block. It contains information we need to
 * understand how and when the item can be equipped.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyEquippingBlockDefinition}
*/
export interface DestinyEquippingBlockDefinition {
    /**
     * If the item is part of a gearset, this is a reference to that gearset item.
     * Mapped to DestinyInventoryItemDefinition in the manifest.
    */
    readonly gearsetItemHash?: number;
    /**
     * If defined, this is the label used to check if the item has other items of
     * matching types already equipped.
     *
     * For instance, when you aren't allowed to equip more than one Exotic Weapon, that'
     * s because all exotic weapons have identical uniqueLabels and the game checks the
     * to-be-equipped item's uniqueLabel vs. all other already equipped items (other
     * than the item in the slot that's about to be occupied).
    */
    readonly uniqueLabel: string;
    /** The hash of that unique label. Does not point to a specific definition. */
    readonly uniqueLabelHash: number;
    /**
     * An equipped item *must* be equipped in an Equipment Slot. This is the hash
     * identifier of the DestinyEquipmentSlotDefinition into which it must be equipped.
     * Mapped to DestinyEquipmentSlotDefinition in the manifest.
    */
    readonly equipmentSlotTypeHash: number;
    /**
     * These are custom attributes on the equippability of the item.
     *
     * For now, this can only be "equip on acquire", which would mean that the item
     * will be automatically equipped as soon as you pick it up. This enum represents a
     * set of flags - use bitwise operators to check which of these match your value.
    */
    readonly attributes: EquippingItemBlockAttributes;
    /**
     * Ammo type used by a weapon is no longer determined by the bucket in which it is
     * contained. If the item has an ammo type - i.e. if it is a weapon - this will be
     * the type of ammunition expected.
    */
    readonly ammoType: DestinyAmmunitionType;
    /**
     * These are strings that represent the possible Game/Account/Character state
     * failure conditions that can occur when trying to equip the item. They match up
     * one-to-one with requiredUnlockExpressions.
    */
    readonly displayStrings: string[];
}
