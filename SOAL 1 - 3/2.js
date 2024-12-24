function averageResponseTime(responseTimes) {
  const total = responseTimes.reduce((sum, log) => sum + log.time, 0);
  return total / responseTimes.length;
}

const responseTimes = [
  { endpoint: "/api/v1/users", time: 120 },
  { endpoint: "/api/v1/products", time: 80 },
  { endpoint: "/api/v1/orders", time: 150 },
];
console.log(averageResponseTime(responseTimes));
