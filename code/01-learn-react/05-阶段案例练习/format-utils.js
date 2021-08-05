function formatPrice(price) {
  if (typeof price !== "number") {
    // 逻辑或，前面为真则返回前面的值，否则返回后面的值
    price = Number(price) || 0
  }
  // 价格保留两位小数
  return "￥" + price.toFixed(2)
}