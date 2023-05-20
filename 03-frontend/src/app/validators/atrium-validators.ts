/* 
 * ----------------------------
 * atrium-validators.ts - Atrium Ecommerce
 * ----------------------------
 */

import { FormControl, ValidationErrors } from "@angular/forms";

export class AtriumValidators {

  // Validation for whitespace

  static notOnlyWhitespace(control: FormControl) : ValidationErrors {

    if ((control.value != null) && (control.value.trim().length === 0)) {

      return {'notOnlyWhitespace' : true};
    } else {

      return null;
    }
  }
}
