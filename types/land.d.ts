export interface GroundTileProps {
  tileId: number;
  flipX: boolean;
  flipY: boolean;
}

export interface BuildingTileProps {
  tile: TileRect | null;
  isOccupied: boolean;
  isHidden: boolean;
  ref: string;
  tileRef: TileRect;
  isNFT: boolean;
}

export interface RoadObjects {
  entityType: PropsTypes;
  corner: string;
  z: number;
}

export interface ClosestCorner {
  h: number;
  w: number;
  col: number;
  row: number;
  corner: string;
}

export interface CitySize {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  citySizeX: number;
  citySizeY: number;
}

export interface SpriteBounds {
  spriteTileIdTopLeft: number;
  spriteTileIdTopRight: number;
  spriteTileIdBottomLeft: number;
  spriteTileIdBottomRight: number;
}

export interface userNFTsProps {
  totalNFTs: number;
  braavosCounter: number;
  argentxCounter: number;
  starkFighterLevel: number;
  hasZkLend: boolean;
  hasAVNU: boolean;
  hasJediSwap: boolean;
  hasSIDShield: boolean;
  hasSIDTotem: boolean;
}

export interface TileData {
  entity: any;
  plane: { w: number; h: number };
  textureOffset: Coord;
  textureRepeat: Coord;
  z: number;
}

export type Coord = {
  x: number;
  y: number;
};

export type CityCenterProps = {
  center: Coord;
  boundaries: {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
  };
};

export type Offset = { x: number; y: number; z: number };
