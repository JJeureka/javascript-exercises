const used = process.memoryUsage();

console.log("Memory usage (RSS): " + formatBytes(used.rss));
console.log("Memory usage (Heap Total): " + formatBytes(used.heapTotal));
console.log("Memory usage (Heap Used): " + formatBytes(used.heapUsed));
console.log("Memory usage (External): " + formatBytes(used.external));

function formatBytes(bytes) {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

    if (bytes === 0) return "0 Byte";
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
}