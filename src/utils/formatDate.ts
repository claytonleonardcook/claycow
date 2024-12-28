function formatDate(date: Date): string {
    return date.toLocaleString('default', { month: 'long', day: '2-digit', year: 'numeric' });
}

export default formatDate;