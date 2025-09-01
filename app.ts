/**
 * RULES
 * A package is bulky if its volume (Width x Height x Length) is greater than or equal to 1,000,000 cm³ or when one of its dimensions is greater or equal to 150 cm.
 * 
 * A package is heavy when its mass is greater or equal to 20 kg.
 * 
 * 
 * STANDARD: standard packages (those that are not bulky or heavy) can be handled normally.
 * SPECIAL: packages that are either heavy or bulky can't be handled automatically.
 * REJECTED: packages that are both heavy and bulky are rejected.
 */

enum packageStackNames{
    standard = "standard",
    special = "special",
    rejected = "rejected"
}

/**
 * Implement the function sort(width, height, length, mass) (units are centimeters for the dimensions and kilogram for the mass). This function must return a string: the name of the stack where the package should go.
 * @param {number} width cm
 * @param {number} height cm
 * @param {number} length cm
 * @param {number} mass kg
 * @return {packageStackNames}
 */
export const sort = (width: number, height: number, length: number, mass: number): packageStackNames => {
    const hasInvalidNum: boolean = width < 1 || height < 1 || length < 1 || mass < 1;
    // check to see if any of the passed numbers are negative or 0
    if (hasInvalidNum) return packageStackNames.rejected;

    const dimensionGreaterThan150: boolean = width >= 150 || height >= 150 || length >= 150; 
    const isLargeVolume: boolean = (width * height * length) >= 1000000;

    const isHeavy: boolean = mass >= 20;
    const isBulky: boolean = dimensionGreaterThan150 || isLargeVolume;



    if(isBulky && isHeavy){
        return packageStackNames.rejected;
    }else if((isHeavy && !isBulky) || (!isHeavy && isBulky)){
        return packageStackNames.special
    }{
        return packageStackNames.standard
    }
}

console.log(sort(4, 4, 2, -6));