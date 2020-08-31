declare module "iso-country-codes" {
  export interface code {
    name: string;
    alpha2: string;
    alpha3: string;
    numeric: string;
  }

  export const codes: code[];
}
