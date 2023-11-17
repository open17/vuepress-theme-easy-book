# Markdown增强
## 增强容器
### 信息提示类容器
::: alert 测试
你好啊
:::

::: warning 测试
你好啊
:::

::: info 测试
你好啊
:::

::: success 测试
你好啊
:::

::: error 测试
你好啊
:::

```md
::: alert 测试
你好啊
:::

::: warning 测试
你好啊
:::

::: info 测试
你好啊
:::

::: success 测试
你好啊
:::

::: error 测试
你好啊
:::
```

### 折叠面板

:::collapse 我是标题
我是折叠内容
:::

```
:::collapse 我是标题
我是折叠内容
:::
```

### tooltip

:::tooltip 你好呀
<button class="btn">Hover me</button>
:::

对于要添加注释的元素，你可以使用:::tooltip 提示 包裹住注释内容，即可实现tooltip效果。

```html
:::tooltip 你好呀
<button class="btn">Hover me</button>
:::
```



## 视频嵌入

@tab

<[bilibili]

```html
<IVideo w="560" h="351" bv="BV1CV4y1b72n" />
<!-- w 宽 h 高 -->
```
<br/>
<IVideo w="560" h="351" bv="BV1CV4y1b72n" />



<()

<[youtube]

```html
<IVideo w="590" h="351" youtube="5Kqyhu_eIcw" />
<!-- w 宽 h 高 -->
```

<br/>


<()

@@tab




## 荧光笔
@tab

<[介绍]

荧光笔(支持当代码块没有语言标签时在代码块中使用)
- `<h-lighter color="COLOR">WORD</h-lighter>`
- WORD替换为要高亮的文字
- `color`属性可选,COLOR为高亮颜色,不填`color`默认为黄色
- `COLOR`支持css颜色关键词/RGB/16进制颜色

<()

<[示例]

```md

这是一个<h-lighter>高亮</h-lighter>示例,你可以<h-lighter color="pink">切换</h-lighter><h-lighter color="rgb(33, 168, 252,0.6)">高亮</h-lighter>的<h-lighter color="#dafbe1">颜色</h-lighter>

```

这是一个<h-lighter>高亮</h-lighter>示例,你可以<h-lighter color="pink">切换</h-lighter><h-lighter color="rgb(33, 168, 252,0.6)">高亮</h-lighter>的<h-lighter color="#dafbe1">颜色</h-lighter>

```
支持当代码块没有语言标签时<h-lighter>使用</h-lighter>
```

<()


@@tab




## 选项卡
- `@tab`开始`@@tab`结束
- `<[xxx]>`到`<()>`为一项,xxx为选项名
- 注意选项卡开始时应和上面内容间隔一个空行


@tab

<[python]

```py
import sys
import heapq
import random
from math import ceil,floor,fmod,gcd,sqrt,inf
from bisect import bisect_left
from collections import defaultdict,Counter,deque,OrderedDict
from functools import lru_cache,cmp_to_key

#sys.setrecursionlimit(100000)

# 输入1
def ii():
    return int(sys.stdin.readline().strip())

# 输入2
def iin():
    return map(int,sys.stdin.readline().split())

def inn():
    return sys.stdin.readline().strip()
```


<()

<[c++]


```cpp
#include<bits/stdc++.h>
using namespace std;
// #define int long long
#define ios ios::sync_with_stdio(false);cin.tie(0);cout.tie(0);
#define For(w, a, n) for(int w=(a);w<(n);++w)
#define _For(a,b,c) for(int a=(b);a>(c);a--)
#define all(x) (x).begin(),x.end()
#define inf 0x3f3f3f3f
#define endl '\n'
//对拍
#define fo1 freopen("data.in","r",stdin);freopen("res.out","w",stdout);
#define fo2 freopen("data.in","r",stdin);freopen("ans.out","w",stdout);
//输出数组
#define printA(a,b,c) cout<<'\n'<<"debug start"<<'\n';for(int i=a;i<=b;i++){cout<<c[i]<<' ';}cout<<'\n'<<"debug over"<<'\n'<<'\n';
typedef long long ll;
typedef unsigned long long ull;
typedef pair<int, int> pii;
int read();
void write(int);

const int N=5e5+5;
const int MOD=1e9+7;


void hhhh(){
}

signed main() {
    // hhhh();
    int T=read();
    while(T--){
        hhhh();
    }
    return 0;
}

inline int read() {
    int x = 0, f = 1;
    char ch = getchar();
    while (ch < '0' || ch > '9') {
        if (ch == '-')
            f = -1;
        ch = getchar();
    }
    while (ch >= '0' && ch <= '9') {
        x = x * 10 + ch - '0';
        ch = getchar();
    }
    return x * f;
}
inline void write(int x)
{
    if (x < 0) { putchar('-'); x = -x; }
    if (x > 9) write(x / 10);
    putchar(x % 10 + '0');
}
```

<()

@@tab

## 图片增强

@tab

<[介绍]
点击图片支持放大缩小旋转功能,url请使用静态资源/外部链接,详见[异常排查](./guide.html#相对路径图片无法显示)
```md
!![alt](url)
```
<()

<[示例]

```md
!![img](https://avatars.githubusercontent.com/u/125687556?s=48&v=4)
```
!![img](https://avatars.githubusercontent.com/u/125687556?s=48&v=4)

<()


@@tab

## $a^1_{1}$ 