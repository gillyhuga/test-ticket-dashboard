export const generateChartData = () => {
    const startDate = new Date('2024-01-01');
    const endDate = new Date('2024-12-31');
    const data = [];

    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    let currentValue = 10;

    for (let i = 0; i <= diffDays; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);

        const formattedDate = currentDate.toISOString().split('T')[0];
        currentValue += Math.floor(Math.random() * 20) - 10;
        currentValue = Math.max(10, Math.min(100, currentValue));

        data.push({
            value: currentValue,
            date: formattedDate
        });
    }

    return data;
};
