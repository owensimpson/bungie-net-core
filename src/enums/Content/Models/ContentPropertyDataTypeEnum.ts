/** @see {@link https://bungie-net.github.io/#/components/schemas/Content.Models.ContentPropertyDataTypeEnum} */
export const ContentPropertyDataTypeEnum = {
  None: 0,
  Plaintext: 1,
  Html: 2,
  Dropdown: 3,
  List: 4,
  Json: 5,
  Content: 6,
  Representation: 7,
  Set: 8,
  File: 9,
  FolderSet: 10,
  Date: 11,
  MultilinePlaintext: 12,
  DestinyContent: 13,
  Color: 14
} as const;
