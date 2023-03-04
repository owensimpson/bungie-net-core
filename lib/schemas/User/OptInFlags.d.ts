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
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/User.OptInFlags}
 */
export declare enum OptInFlags {
    None = 0,
    Newsletter = 1,
    System = 2,
    Marketing = 4,
    UserResearch = 8,
    CustomerService = 16,
    Social = 32,
    PlayTests = 64,
    PlayTestsLocal = 128,
    Careers = 256
}
