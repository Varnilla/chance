/**
 * @example rng(1000, "scale") or rng(50, "percentage")
 * @param {Number} value x% chance for percentage type or 1/x for scale type. 
 * @param {String} type Percentage or scale.
 */
function rng(value, type) {
    type = type.toLowerCase()
    if (!["percentage", "scale"].includes(type)) throw "Valid types are percentage or scale!";
    if (typeof(value) != "number") throw "Value must be a number!";
    if (typeof(value) == "string") value = parseInt(value);
    let cent = 100
    if (type == "percentage") {
        if(value > 100) throw "Percentage can't be higher than 100!";
        const strv = value.toString()
        if(strv.includes(".")) {
            value = parseInt(strv.replace(".", ""))
            for(x = 0; x < strv.split(".")[1].length; x++) cent *= 10
        }
    }
    return Math.round(Math.random() * (type == "scale" ? value : cent)) < (type == "scale" ? 1 : value)
}