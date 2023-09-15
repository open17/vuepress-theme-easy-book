# 功能展示页
## 前言
题目源自某场leetcode周赛

## T2 统计值等于子树平均值的节点数 
给你一棵二叉树的根节点 root ，找出并返回满足要求的节点数，要求节点的值等于其 子树 中值的 平均值           

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