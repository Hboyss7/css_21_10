function calculateSum(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

document.getElementById('calculateButton').addEventListener('click', function() {
    const n = parseInt(document.getElementById('numberInput').value);
    if (isNaN(n) || n < 1) {
        document.getElementById('result').innerText = 'Vui lòng nhập số nguyên dương.';
        return;
    }
    const total = calculateSum(n);
    document.getElementById('result').innerText = `Tổng từ 1 đến ${n} là: ${total}`;
});