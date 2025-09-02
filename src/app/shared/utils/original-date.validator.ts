import { FormControl } from '@angular/forms';

export class OriginalDateValidator {

    static isValid(control: FormControl): any {
        return false;
    }
}
