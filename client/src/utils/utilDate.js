export function formatDate(dateString){
    const date = new Date(dateString);
    const dateOptions = {year:'numeric', month:'numeric', day:'numeric' };
    return date.toLocaleDateString('en-US',  dateOptions);
}