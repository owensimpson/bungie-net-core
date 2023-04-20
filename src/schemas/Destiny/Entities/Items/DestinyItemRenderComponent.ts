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
//

/**
 * Many items can be rendered in 3D. When you request this block, you will obtain
 * the custom data needed to render this specific instance of the item.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.Entities.Items.DestinyItemRenderComponent}
 */
export interface DestinyItemRenderComponent {
  /** If you should use custom dyes on this item, it will be indicated here. */
  readonly useCustomDyes: boolean;
  /**
   * A dictionary for rendering gear components, with:
   *
   * key = Art Arrangement Region Index
   *
   * value = The chosen Arrangement Index for the Region, based on the value of a
   * stat on the item used for making the choice.
   */
  readonly artRegions: { [key: number]: number };
}
