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
 * This Enumeration further classifies items by more specific categorizations than
 * DestinyItemType. The "Sub-Type" is where we classify and categorize items one
 * step further in specificity: "Auto Rifle" instead of just "Weapon" for example,
 * or "Vanguard Bounty" instead of merely "Bounty".
 *
 * These sub-types are provided for historical compatibility with Destiny 1, but an
 * ideal alternative is to use DestinyItemCategoryDefinitions and the
 * DestinyItemDefinition.itemCategories property instead. Item Categories allow for
 * arbitrary hierarchies of specificity, and for items to belong to multiple
 * categories across multiple hierarchies simultaneously. For this enum, we pick a
 * single type as a "best guess" fit.
 *
 * NOTE: This is not all of the item types available, and some of these are
 * holdovers from Destiny 1 that may or may not still exist.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyItemSubType}
*/
export declare enum DestinyItemSubType {
    None = 0,
    /** DEPRECATED. Items can be both "Crucible" and something else interesting. */
    Crucible = 1,
    /** DEPRECATED. An item can both be "Vanguard" and something else. */
    Vanguard = 2,
    /** DEPRECATED. An item can both be Exotic and something else. */
    Exotic = 5,
    AutoRifle = 6,
    Shotgun = 7,
    Machinegun = 8,
    HandCannon = 9,
    RocketLauncher = 10,
    FusionRifle = 11,
    SniperRifle = 12,
    PulseRifle = 13,
    ScoutRifle = 14,
    /** DEPRECATED. An item can both be CRM and something else. */
    Crm = 16,
    Sidearm = 17,
    Sword = 18,
    Mask = 19,
    Shader = 20,
    Ornament = 21,
    FusionRifleLine = 22,
    GrenadeLauncher = 23,
    SubmachineGun = 24,
    TraceRifle = 25,
    HelmetArmor = 26,
    GauntletsArmor = 27,
    ChestArmor = 28,
    LegArmor = 29,
    ClassArmor = 30,
    Bow = 31,
    DummyRepeatableBounty = 32,
    Glaive = 33
}
