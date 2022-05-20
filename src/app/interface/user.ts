import { Address } from "./address";
import { Company } from "./company";

export interface User {
  id?: number; // to means the id is not obligated
  name?: string;
  username?: string;
  email?: string;
  address?: Address;
  phone?: string;
  website?: string;
  company?:Company
}