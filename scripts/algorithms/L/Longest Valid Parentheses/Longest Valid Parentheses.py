class Solution:
    def longestValidParentheses(self, s: str) -> int:
        
        maxi = 0
        stack = [-1]
        
        for i in range(len(s)) :
            if s[i] == "(" : stack.append(i)
            else :
                stack.pop()
                if len(stack) == 0 : stack.append(i)
                else : maxi = max(maxi, i - stack[-1])
        
        return maxi
