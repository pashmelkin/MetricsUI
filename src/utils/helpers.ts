
export const DisplayTime = (ms : number) : string => {
    const diffDays = Math.floor(ms / 86400000); // days
    const diffHrs = Math.floor((ms % 86400000) / 3600000); // hours
    // const diffMins = Math.round(((ms % 86400000) % 3600000) / 60000); // minutes
    let dateDiff  = '';
    if (diffDays > 0) dateDiff = `${diffDays} days`;
    if (diffHrs > 0) dateDiff = dateDiff + ` ${diffHrs} hours`;
    return dateDiff;
};
