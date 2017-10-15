import { FormTypes } from "./form-types.interface";

export interface IValidator {
  [type: string]: boolean | number
}

export interface Option {
  key: string | number;
  value: string | number | boolean;
}

export interface Config {
  name: string;
  type?: FormTypes;
  label?: string;
  value?: string;
  disabled?: boolean;
  options?: Option[];
  validation?: IValidator
}

export type Configs = Config[];
