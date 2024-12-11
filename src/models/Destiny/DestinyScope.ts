/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-net-core code generator program
 * Repository: {@link https://github.com/owens1127/bungie-net-core}
 * Do not edit these files manually.
 */
//

/**
 * There's a lot of places where we need to know scope on more than just a profile
 * or character level. For everything else, there's this more generic sense of
 * scope.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyScope}
 */
export declare enum DestinyScope {
  Profile = 0,
  Character = 1
}
