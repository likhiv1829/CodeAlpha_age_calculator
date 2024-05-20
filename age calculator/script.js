function isValidDate(day, month, year) {
    if (month < 0 || month > 11) return false;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return day >= 1 && day <= daysInMonth;
}
document.getElementById('ageCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1; 
    const year = parseInt(document.getElementById('year').value);

    if (!isValidDate(day, month, year)) {
        alert('Please enter a valid date.');
        return;
    }
    const today = new Date();
    const birthDate = new Date(year, month, day);
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }
    if (ageDays < 0) {
        ageMonths--;
        const previousMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        ageDays += previousMonth.getDate();
    }
    document.getElementById('result-years').textContent = `${ageYears} Years`;
    document.getElementById('result-months').textContent = `${ageMonths} Months`;
    document.getElementById('result-days').textContent = `${ageDays} Days`;
});
