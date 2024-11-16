function main(_for) {
    const unitPrice = document.getElementById(`unit_price`);
    const unitPriceValue = parseFloat(unitPrice.value || 0);
    const prev = document.getElementById(`${_for}_prev`);

    const prevValue = parseFloat(prev.value || 0);

    const current = document.getElementById(`${_for}_current`);
    const currentValue = parseFloat(current.value || 0);

    const totalUnitConsumed = document.getElementById(
        `${_for}_total_unit_consumed`
    );
    const totalUnitConsumedValue = (currentValue - prevValue) * unitPriceValue;

    const value =
        _for === "motor" ? totalUnitConsumedValue / 2 : totalUnitConsumedValue;

    return value;

    totalUnitConsumed.textContent = `Total Units Consumed: ${value}`;
}

document.addEventListener("DOMContentLoaded", () => main("motor"));
document.addEventListener("DOMContentLoaded", () => main("home"));
document.addEventListener("DOMContentLoaded", update);

function update() {
    const submit = document.getElementById("calculate");
    submit.addEventListener("click", () => {
        const value = main("motor") + main("home");

        const totalPayableValue = document.getElementById(
            `total_payable_value`
        );
        totalPayableValue.textContent = `	
₹${value}`;
    });
}
