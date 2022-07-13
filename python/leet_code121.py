# def maxProfit(prices):
#   buy = prices[0]
#   gains = 0
#   for i in range(len(prices)):
#     if prices[i] < buy:
#       buy = prices[i]

#     if (prices[i] - buy) > gains:
#       gains = prices[i] - buy
  
#   return gains

# prices = [7,1,5,3,6,4]
# print(maxProfit(prices))

def maxProfit(prices):
  l, r = 0, 1
  maxP = 0

  while r < len(prices):
    if prices[l] < prices[r]:
      profit = prices[r] - prices[l]
      maxP = max(maxP, profit)
    else:
      l = r
    r += 1

  return maxP
    

prices = [7,1,5,3,6,4]
print(maxProfit(prices))