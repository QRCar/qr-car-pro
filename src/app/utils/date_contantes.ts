import * as moment from 'moment';

export const changeDateToMoment = obj => { obj.date= moment(obj.date, "DD/MM/YYYY").valueOf(); return obj; };
export const changeMomentToDate = obj => { obj.date= moment(obj.date).format("DD/MM/YYYY"); return obj; };
export const dateIsToday = obj => obj.date === moment().format("DD/MM/YYYY");
export const dateIsYesterday = obj => obj.date === moment().subtract(1, "days").format("DD/MM/YYYY");
export const dateIsBefore6Months =  obj => moment(obj.date, "DD/MM/YYYY").isBefore(moment().subtract(2, "day"), 'day') && moment(obj.date, "DD/MM/YYYY").isAfter(moment().subtract(6, "month"), 'day')