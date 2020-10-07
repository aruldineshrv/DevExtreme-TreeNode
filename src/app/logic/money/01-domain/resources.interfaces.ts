// export interface IRegularResources {
//   gold?: number;
//   silver?: number;
//   cooper?: number;
//   food?: number;
//   wood?: number;
//   stone?: number;
//   iron?: number;
// }

// export interface ISpecialResources {
//   diamonds?: number;
//   opal?: number;
//   topaz?: number;
// }

// export interface IArcaneResources {
//   whiteMagic?: number;
//   blackMagic?: number;
//   greyMagic?: number;
// }

export enum ResourcesEnum {
    gold =2,
    silver=3,
    cooper=4,
    food=5,
    wood=6,
    stone=7,
    iron=8,
    diamonds=9,
    opal=10,
    topaz=11,
    whiteMagic=12,
    blackMagic=13,
    greyMagic=14,
  }

  export type ResourcesNames = 'gold' | 'silver' | 'cooper'
            | 'food' | 'wood' |'stone' | 'iron' 
            |'diamonds' |'opal'|'topaz' |'whiteMagic'
            |'blackMagic'|'greyMagic'
  

export enum resourceType {
  regular = 2,
  special = 3,
  arcane = 4
}








export type TAllResources = {
  gold?: { amount: number; type: resourceType.regular };
  iron?: { amount: number; type: resourceType.regular };
  silver?: { amount: number; type: resourceType.regular };
  cooper?: { amount: number; type: resourceType.regular };
  food?: { amount: number; type: resourceType.regular };
  wood?: { amount: number; type: resourceType.regular };
  stone?: { amount: number; type: resourceType.regular };
  //special
  diamonds?: { amount: number; type: resourceType.special };
  opal?: { amount: number; type: resourceType.special };
  topaz?: { amount: number; type: resourceType.special };
  //arcane
  whiteMagic?: { amount: number; type: resourceType.arcane };
  blackMagic?: { amount: number; type: resourceType.arcane };
  greyMagic?: { amount: number; type: resourceType.arcane };
};
