const fs = require(`fs`);
const rawDataTest = fs.readFileSync(`data.json`, `utf8`);
const checkoutevents = JSON.parse(rawDataTest);
console.log("total order ", checkoutevents.length);
const successfulOrders = checkoutevents.filter(order => {
    return order.status == "completed";
});
console.log("Filtered orders left (Completed only):", successfulOrders.length);
const cleanedOrders = successfulOrders.map(order => {
    return {
        id: order.order_id,
        name: order.customer.details.name,
        customerEmail: order.customer.details.email,
        orderStatus: order.status
    }
});
console.log("PHASE 3: TRANSFORMATION COMPLETE");
console.log("Look at our clean, reshaped data structure:");
console.log(cleanedOrders);
const finalRecord = {
    record_gernated_at: new Date().toISOString,
    finaldata: cleanedOrders,
    totalOrders: cleanedOrders.length
};
const finalcleaned = JSON.stringify(finalRecord, null, 2);
fs.writeFileSync(`clean_report.json`, finalcleaned);
console.log(" Project 1 pipeline complete.");
setTimeout(() => { }, 36000);