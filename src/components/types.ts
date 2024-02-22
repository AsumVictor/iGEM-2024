export type TODO = any;

export interface Team {
  first_name: string;
  last_name: string;
  major: string;
  teamtype:
    | "lab team"
    | "wiki team"
    | "modelling team"
    | "engineering team"
    | "entrepreneurship team";
  image: TODO;
}
