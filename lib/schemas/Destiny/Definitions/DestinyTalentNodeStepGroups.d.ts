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
import { DestinyTalentNodeStepWeaponPerformances } from './DestinyTalentNodeStepWeaponPerformances';
import { DestinyTalentNodeStepImpactEffects } from './DestinyTalentNodeStepImpactEffects';
import { DestinyTalentNodeStepGuardianAttributes } from './DestinyTalentNodeStepGuardianAttributes';
import { DestinyTalentNodeStepLightAbilities } from './DestinyTalentNodeStepLightAbilities';
import { DestinyTalentNodeStepDamageTypes } from './DestinyTalentNodeStepDamageTypes';
/**
 * These properties are an attempt to categorize talent node steps by certain
 * common properties. See the related enumerations for the type of properties being
 * categorized.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyTalentNodeStepGroups}
 */
export interface DestinyTalentNodeStepGroups {
    /**
     * This enum represents a set of flags - use bitwise operators to check which of
     * these match your value.
     */
    readonly weaponPerformance: DestinyTalentNodeStepWeaponPerformances;
    /**
     * This enum represents a set of flags - use bitwise operators to check which of
     * these match your value.
     */
    readonly impactEffects: DestinyTalentNodeStepImpactEffects;
    /**
     * This enum represents a set of flags - use bitwise operators to check which of
     * these match your value.
     */
    readonly guardianAttributes: DestinyTalentNodeStepGuardianAttributes;
    /**
     * This enum represents a set of flags - use bitwise operators to check which of
     * these match your value.
     */
    readonly lightAbilities: DestinyTalentNodeStepLightAbilities;
    /**
     * This enum represents a set of flags - use bitwise operators to check which of
     * these match your value.
     */
    readonly damageTypes: DestinyTalentNodeStepDamageTypes;
}
