/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.18.0
 * Contact: support@bungie.com
 *
 * OODestiny Version: 2.0.3
 * NOTE: This class is auto generated by the oodestiny code generator program
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Do not edit these files manually.
 */
//

import { DamageType } from '../DamageType';

/**
 * This defines information that can only come from a talent grid on an item. Items
 * mostly have negligible talent grid data these days, but instanced items still
 * retain grids as a source for some of this common information.
 *
 * Builds/Subclasses are the only items left that still have talent grids with
 * meaningful Nodes.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyItemTalentGridBlockDefinition}
 */
export interface DestinyItemTalentGridBlockDefinition {
  /**
   * The hash identifier of the DestinyTalentGridDefinition attached to this item.
   * Mapped to DestinyTalentGridDefinition in the manifest.
   */
  readonly talentGridHash: number;
  /**
   * This is meant to be a subtitle for looking at the talent grid. In practice,
   * somewhat frustratingly, this always merely says the localized word for "Details".
   * Great. Maybe it'll have more if talent grids ever get used for more than builds
   * and subclasses again.
   */
  readonly itemDetailString: string;
  /**
   * A shortcut string identifier for the "build" in question, if this talent grid
   * has an associated build. Doesn't map to anything we can expose at the moment.
   */
  readonly buildName: string;
  /**
   * If the talent grid implies a damage type, this is the enum value for that damage
   * type.
   */
  readonly hudDamageType: DamageType;
  /**
   * If the talent grid has a special icon that's shown in the game UI (like builds,
   * funny that), this is the identifier for that icon. Sadly, we don't actually get
   * that icon right now. I'll be looking to replace this with a path to the actual
   * icon itself.
   */
  readonly hudIcon: string;
}
