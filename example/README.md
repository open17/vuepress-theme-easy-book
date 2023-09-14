# 功能展示页
## 前言
题目源自某场leetcode周赛

## T1 字符串中最大的 3 位相同数字


@tab

<[题目]

给你一个字符串 num ，表示一个大整数。如果一个整数满足下述所有条件，则认为该整数是一个 优质整数 ：     

该整数是 num 的一个长度为 3 的 子字符串 。          
该整数由唯一一个数字重复 3 次组成。            
以字符串形式返回 最大的优质整数 。如果不存在满足要求的整数，则返回一个空字符串 "" 。              

注意：           
         
子字符串 是字符串中的一个连续字符序列。             
num 或优质整数中可能存在 前导零 。                
 

<()

<[数据1]            
```
输入：num = "6777133339"              
输出："777"
解释：num 中存在两个优质整数："777" 和 "333" 。
"777" 是最大的那个，所以返回 "777" 。
```
<()

<[数据2]
```
输入：num = "2300019"
输出："000"
解释："000" 是唯一一个优质整数。
```
<()

<[数据3]
```
输入：num = "42352338"
输出：""
解释：不存在长度为 3 且仅由一个唯一数字组成的整数。因此，不存在优质整数。
```
<()

<[提示]
```
3 <= num.length <= 1000
num 仅由数字（0 - 9）组成
```
<()

<[代码]

模拟
```cpp
class Solution {
public:
    string largestGoodInteger(string num) {
        int l=2;
        int p=-1;
        int ans=-1;
        while(l<num.size()){
            if(num[l-2]==num[l-1]&&num[l-1]==num[l]){
                if(p<(num[l]-'0')){
                    p=num[l]-'0';
                    ans=l;
                }
                l+=3;
            }
            else{
                l++;
            }
        }
        if(ans==-1)return "";
        return num.substr(ans-2,3);
    }
};
```


<()

@@tab


## T2 统计值等于子树平均值的节点数 
给你一棵二叉树的根节点 root ，找出并返回满足要求的节点数，要求节点的值等于其 子树 中值的 平均值 。           

注意：             
         
n 个元素的平均值可以由 n 个元素 求和 然后再除以 n ，并 向下舍入 到最近的整数。             
root 的 子树 由 root 和它的所有后代组成。            
 

示例 1：
!![img](https://assets.leetcode.com/uploads/2022/03/15/image-20220315203925-1.png)
```
输入：root = [4,8,5,0,1,null,6]
输出：5
解释：
对值为 4 的节点：子树的平均值 (4 + 8 + 5 + 0 + 1 + 6) / 6 = 24 / 6 = 4 。
对值为 5 的节点：子树的平均值 (5 + 6) / 2 = 11 / 2 = 5 。
对值为 0 的节点：子树的平均值 0 / 1 = 0 。
对值为 1 的节点：子树的平均值 1 / 1 = 1 。
对值为 6 的节点：子树的平均值 6 / 1 = 6 。
```
示例 2：
!![img2](https://assets.leetcode.com/uploads/2022/03/26/image-20220326133920-1.png)
```
输入：root = [1]
输出：1
解释：对值为 1 的节点：子树的平均值 1 / 1 = 1。
```

提示：
```
树中节点数目在范围 [1, 1000] 内
0 <= Node.val <= 1000
```
###  思路
dfs
```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
typedef pair<int,int> pii;
class Solution {
public:
    int cnt=0;
    int averageOfSubtree(TreeNode* root) {
        dfs(root);
        return cnt;
    }
    pii dfs(TreeNode *node){
        int ans=node->val;
        int num=1;
        if(node->left){
            pii a=dfs(node->left);
            ans+=a.first;
            num+=a.second;
        }
        if(node->right){
            pii a=dfs(node->right);
            ans+=a.first;
            num+=a.second;
        }
        if(ans/num==node->val){
            cnt++;
        }
        return make_pair(ans,num);
    }
};
```
## T3 统计打字方案数 
Alice 在给 Bob 用手机打字。数字到字母的 对应 如下图所示。            
为了 打出 一个字母，Alice 需要 按 对应字母 i 次，i 是该字母在这个按键上所处的位置。          
!![pic](https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png)
比方说，为了按出字母 's' ，Alice 需要按 '7' 四次。类似的， Alice 需要按 '5' 两次得到字母  'k' 。          
注意，数字 '0' 和 '1' 不映射到任何字母，所以 Alice 不 使用它们。            
但是，由于传输的错误，Bob 没有收到 Alice 打字的字母信息，反而收到了 按键的字符串信息 。               

比方说，Alice 发出的信息为 "bob" ，Bob 将收到字符串 "2266622" 。           
给你一个字符串 pressedKeys ，表示 Bob 收到的字符串，请你返回 Alice 总共可能发出多少种文字信息 。              
            
由于答案可能很大，将它对 109 + 7 取余 后返回。              

 

示例 1：
```
输入：pressedKeys = "22233"
输出：8
解释：
Alice 可能发出的文字信息包括：
"aaadd", "abdd", "badd", "cdd", "aaae", "abe", "bae" 和 "ce" 。
由于总共有 8 种可能的信息，所以我们返回 8 。
```
示例 2：
```
输入：pressedKeys = "222222222222222222222222222222222222"
输出：82876089
解释：
总共有 2082876103 种 Alice 可能发出的文字信息。
由于我们需要将答案对 109 + 7 取余，所以我们返回 2082876103 % (109 + 7) = 82876089 。
```

提示：
```
1 <= pressedKeys.length <= 105
pressedKeys 只包含数字 '2' 到 '9' 。
```
### 思路   
分组计算(连续相同的字母化为一组)，并根据乘法原则计算最终结果    
尝试记忆化搜索
```py
class Solution:
    def countTexts(self, pressedKeys: str) -> int:
        mod=int(1e9+7)
        @cache
        def dfs(i,size,t):
            if i==size:
                return 1
            elif i>size:
                return 0
            s=0
            for k in range(i+1,i+4+t):
                s+=dfs(k,size,t)
            return s
        s=pressedKeys[0]
        pressedKeys+='1'
        cnt=0
        ans=1
        for i in pressedKeys:
            if i!=s:
                t=0
                if s=='7' or s=='9':
                    t=1
                ans*=dfs(0,cnt,t)
                #xxx
                cnt=1
                s=i
            else:
                cnt+=1
        return ans%mod
```
MLE了,改成递推形式+预处理
```py
size=100009
a=[0]*size
b=[0]*size
for i in range(100000,-1,-1):
    if i==100000:
        a[i]=1
    else:
        a[i]=a[i+1]+a[i+2]+a[i+3]
for i in range(100000,-1,-1):
    if i==100000:
        b[i]=1
    else:
        b[i]=b[i+1]+b[i+2]+b[i+3]+b[i+4]
class Solution:
    def countTexts(self, pressedKeys: str) -> int:
        mod=int(1e9+7)
        s=pressedKeys[0]
        pressedKeys+='1'
        cnt=0
        ans=1
        for i in pressedKeys:
            if i!=s:
                t=0
                if s=='7' or s=='9':
                    ans*=b[100000-cnt]
                else:
                    ans*=a[100000-cnt]
                cnt=1
                s=i
            else:
                cnt+=1
        return ans%mod
```
b中的数会很大很大，占据内存大 ,所以MLE了
加入分步取模AC
### AC code
```py
size=10**5
mod=int(1e9+7)
a=[0]*(size+4)
b=[0]*(size+5)
for i in range(size,-1,-1):
    if i==size:
        a[i]=1
    else:
        a[i]=(a[i+1]+a[i+2]+a[i+3])%mod
        a[i]%=mod
for i in range(size,-1,-1):
    if i==size:
        b[i]=1
    else:
        b[i]=(b[i+1]+b[i+2]+b[i+3]+b[i+4])%mod
        b[i]%=mod
class Solution:
    def countTexts(self, pressedKeys: str) -> int:
        s=pressedKeys[0]
        pressedKeys+='1'
        cnt=0
        ans=1
        for i in pressedKeys:
            if i!=s:
                t=0
                if s=='7' or s=='9':
                    ans*=b[size-cnt]
                else:
                    ans*=a[size-cnt]
                cnt=1
                s=i
            else:
                cnt+=1
        return ans%mod
```
## T4 检查是否有合法括号字符串路径  
一个括号字符串是一个 非空 且只包含 '(' 和 ')' 的字符串。如果下面 任意 条件为 真 ，那么这个括号字符串就是 合法的 。          

字符串是 () 。          
字符串可以表示为 AB（A 连接 B），A 和 B 都是合法括号序列。           
字符串可以表示为 (A) ，其中 A 是合法括号序列。         
给你一个 m x n 的括号网格图矩阵 grid 。网格图中一个 合法括号路径 是满足以下所有条件的一条路径：                

路径开始于左上角格子 (0, 0) 。
路径结束于右下角格子 (m - 1, n - 1) 。
路径每次只会向 下 或者向 右 移动。
路径经过的格子组成的括号字符串是 合法 的。
如果网格图中存在一条 合法括号路径 ，请返回 true ，否则返回 false 。

 

示例 1：
!![1](https://assets.leetcode.com/uploads/2022/03/15/example1drawio.png)
!![1](https://assets.leetcode.com/uploads/2022/03/15/example1drawio.png)

```
输入：grid = [["(","(","("],[")","(",")"],["(","(",")"],["(","(",")"]]
输出：true
解释：上图展示了两条路径，它们都是合法括号字符串路径。
第一条路径得到的合法字符串是 "()(())" 。
第二条路径得到的合法字符串是 "((()))" 。
注意可能有其他的合法括号字符串路径。
```
示例 2：

!![1](https://assets.leetcode.com/uploads/2022/03/15/example2drawio.png)
```
输入：grid = [[")",")"],["(","("]]
输出：false
解释：两条可行路径分别得到 "))(" 和 ")((" 。由于它们都不是合法括号字符串，我们返回 false 。
``` 

提示：
```
m == grid.length
n == grid[i].length
1 <= m, n <= 100
grid[i][j] 要么是 '(' ，要么是 ')' 。
```
### 思路
dp，用数值模拟括号而非栈
```cpp
class Solution:
    def hasValidPath(self, grid: List[List[str]]) -> bool:
        @cache
        def dfs(i,j,s):
            # print(i,j,s)
            if i>=len(grid)-1 and j>=len(grid[0])-1:
                # print(s)
                return s==0
            a=False
            if j<len(grid[0])-1:
                if grid[i][j+1]==')' and s>0:
                    a|= dfs(i,j+1,s-1)
                elif grid[i][j+1]=='(':
                    a|= dfs(i,j+1,s+1)
            if i<len(grid)-1:
                if grid[i+1][j]==')' and s>0:
                    a|= dfs(i+1,j,s-1)
                elif grid[i+1][j]=='(':
                    a|= dfs(i+1,j,s+1)
            return a
        if grid[0][0]!='(':
            return False
        return dfs(0,0,1)
```
## 一点也不相关的视频
<IVideo w="560" h="351" bv="BV19u4y1D7GT" />