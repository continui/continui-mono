import { fail } from 'assert';
import { PosibleValuesType } from './types';

/**
 * Represents an action option to be used on the action execution.
 */
export interface ActionOption {
    /**
     * Represents a key for the option.
     */
  key:string;

    /**
     * Represents a description for the option.
     */
  description:string;

    /**
     * Represents the option type
     */
  type:string;

    /**
     * Represents the option default value.
     */
  defaultValue?:PosibleValuesType | PosibleValuesType[];

    /**
     * Represents a boolean value specifying if the option is required.
     */
  isRequired?:boolean;

    /**
     * Represents a boolean value specifying if the option is templated and can be transformed.
     */
  isTemplated?:boolean;

    /**
     * Represents a boolean value specifying if the option is secure and should not be in the
     * outputs.
     */
  isSecure?: boolean;
}
