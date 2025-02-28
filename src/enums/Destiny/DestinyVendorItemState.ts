/**
 * The possible states of Destiny Profile Records. IMPORTANT: Any given item can
 * theoretically have many of these states simultaneously: as a result, this was
 * altered to be a flags enumeration/bitmask for v3.2.0.
 *
 * This enum represents a set of flags - use bitwise operators to check which of
 * these match your value.
 * @see {@link https://bungie-net.github.io/#/components/schemas/Destiny.DestinyVendorItemState}
 */
export const DestinyVendorItemState = {
  /** There are no augments on the item. */
  None: 0,
  /**
   * Deprecated forever (probably). There was a time when Records were going to be
   * implemented through Vendors, and this field was relevant. Now they're
   * implemented through Presentation Nodes, and this field doesn't matter anymore.
   */
  Incomplete: 1,
  /**
   * Deprecated forever (probably). See the description of the "Incomplete" value for
   * the juicy scoop.
   */
  RewardAvailable: 2,
  /**
   * Deprecated forever (probably). See the description of the "Incomplete" value for
   * the juicy scoop.
   */
  Complete: 4,
  /**
   * This item is considered to be "newly available", and should have some UI showing
   * how shiny it is.
   */
  New: 8,
  /**
   * This item is being "featured", and should be shiny in a different way from items
   * that are merely new.
   */
  Featured: 16,
  /** This item is only available for a limited time, and that time is approaching. */
  Ending: 32,
  /** This item is "on sale". Get it while it's hot. */
  OnSale: 64,
  /** This item is already owned. */
  Owned: 128,
  /** This item should be shown with a "wide view" instead of normal icon view. */
  WideView: 256,
  /**
   * This indicates that you should show some kind of attention-requesting indicator
   * on the item, in a similar manner to items in the nexus that have such
   * notifications.
   */
  NexusAttention: 512,
  /** This indicates that the item has some sort of a 'set' discount. */
  SetDiscount: 1024,
  /** This indicates that the item has a price drop. */
  PriceDrop: 2048,
  /** This indicates that the item is a daily offer. */
  DailyOffer: 4096,
  /** This indicates that the item is for charity. */
  Charity: 8192,
  /** This indicates that the item has a seasonal reward expiration. */
  SeasonalRewardExpiration: 16384,
  /** This indicates that the sale item is the best deal among different choices. */
  BestDeal: 32768,
  /** This indicates that the sale item is popular. */
  Popular: 65536,
  /** This indicates that the sale item is free. */
  Free: 131072,
  /** This indicates that the sale item is locked. */
  Locked: 262144,
  /** This indicates that the sale item is paracausal. */
  Paracausal: 524288,
  Cryptarch: 1048576,
  ArtifactPerkOwned: 2097152,
  Savings: 4194304,
  Ineligible: 8388608,
  ArtifactPerkBoosted: 16777216
} as const;
