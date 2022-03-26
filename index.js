/**
 * @example rng(1000, "fraction") or rng(50, "percentage")
 * @param {Number} value x% chance for percentage type or 1/x for fraction type. 
 * @param {("percentage" | "fraction")} type Defines the type.
 */
function rng(value, type) {
    type = type.toLowerCase()
    if (!["percentage", "fraction"].includes(type)) throw "Valid types are percentage or fraction!";
    if (typeof(value) != "number") throw "Value must be a number!";
    if (typeof(value) == "string") value = parseInt(value);
    let cent = 100
    if (type == "percentage") {
        if(value > 100) throw "Percentage value can't be higher than 100!";
        const strv = value.toString()
        if(strv.includes(".")) {
            value = parseInt(strv.replace(".", ""))
            for(x = 0; x < strv.split(".")[1].length; x++) cent *= 10
        }
    }
    return Math.round(Math.random() * (type == "fraction" ? value : cent)) < (type == "fraction" ? 1 : value)
}