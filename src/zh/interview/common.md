---
# 这是文章的标题
title: 常见基础
# 这是页面的图标
icon: page
order: 1
tag:
  - Markdown
---

## 常见基础面试题

## 标准和模型和 IE 怪异盒子模型区别?

### 一、标准盒子模型

可以看到，在标准盒模型下，width 和 height 是内容区域即 content 的 width 和 height。
<image src='https://img-blog.csdnimg.cn/44f00798ee5344ef95d2cc1d00ed4b75.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAUmFzY2Fs44CB,size_20,color_FFFFFF,t_70,g_se,x_16'/>
在标准模式下，一个块的总宽度= width + margin(左右) + padding(左右) + border(左右)

### 二、IE 盒子模型

而 IE 盒模型或怪异盒模型显而易见的区别就是，width 和 height 除了 content 区域外，还包含 padding 和 border
<image src='https://img-blog.csdnimg.cn/e30833088f4a4d2a908acdd5480ec2d7.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAUmFzY2Fs44CB,size_20,color_FFFFFF,t_70,g_se,x_16'/>
一个块的总宽度= width + margin(左右)（即 width 已经包含了 padding 和 border 值）

## Htm15 新增标签?

### 一.新增语义化标签

```
html5中新增的语义化标签分为两大类：
1.块元素
2.内联元素
```

块元素新增标签总结

```
<header></header>
<nav></nav>
<section></section>
<footer></footer>
<main></main>
<aside></aside>
<article></aiticle>
<figure>
   <figcaption>独立流内容标题</figcation>
   独立流内容（图表，代码，图片，表格等）
</figure>
<details>
   <summary>概要，标题</summary>
    内容
<details>

```

内联元素新增标签总结

```
<progress value="进度值" min="最小值" max=“最大值”>
   你的浏览器不支持此标签
</progress>
<meter value=“值” min=“” max=“” low=“” high=“”>Your browser is not
supported</meter>
<time datetime="yyyy-mm-dd"></time>
<mark>标记</mark>
```

### 二.新增表单控件

```

1.数据列表
<input type="" list="">
<datalist id="id值"》
          <option value="值">文本</option>
          ...
<datalist>

2. 电子邮箱
<input type="email">

3.url
<input type="url">

4.数字域
<input type="search">

5.手机号码
<input type="tel">

 6.日期控件
（1）年月日
<input type="date">
（2）年月
<input type=“month”>
（3）年周
<input type="week">
（4）时间
<input type="time">
（5）utc时间
<input type="datetime">
（6）本地时间
<input type="datetime-local">

7.滑动条
<input type="range">
```

### 三.多媒体

```
音频
   1. <audio src="音频路径" controls></audio>


   2 <audio controls>
           <source src="xx.mp3" type="audio/mp3">
           <source src="xx.ogg" type="audio/ogg"
     </audio>
```

```
 视频
   1 <video src="视频路径" controls></video>


   2<video controls>
           <source src="xx.mp4" type="video/mp4">
           <source src="xx.ogg" type="video/ogg">
      </video>
```

### 四.css3 新增选择器

> 1.相邻兄弟元素选择器
> EF 两元素具有一个相同的父元素，而且Ｆ元素在Ｅ元素后面，而且相邻
> E+F{}

> 2.通用兄弟选择器
> E 和 F 元素是属于同一父元素之内，并且 F 元素在Ｅ元素之后，那么 E ~ F 选择器将选择
> 所有Ｅ元素后面的Ｆ元素
> E~F{ }

3.属性选择器

> (1).box a[href][title]{ }
> 只使用属性名，但没有确定任何属性值

> (2).box a[href="xxx.html"]{}
> 属性和属性值必须完全匹配

> (3).box a[href*="xxx.html"]{}

动态伪类

```
a:link
a:visited
a:hover
a:active
遵循爱（LoVe）恨（HAte）
1.:hover 用于当用户把鼠标移动到元素上面时的效果；
2.:active 用于用户点击元素那一下的效果（正发生在点的那一下，松开鼠标左键此动作也就完成了）
3.:focus 用于元素成为焦点，这个经常用在表单元素上。
```

nth 选择器

```
1、:first-child 第一个孩子
2、:last-child 最后一个孩子
3、:nth-child(n)     数字、even偶数、odd奇数
4、:nth-last-child(n)
5、:only-child
6、:nth-of-type()                 :nth-child()
7、:nth-last-of-type()            :nth-last-child()
8、:first-of-type和:last-of-type      :first-child  :last-child
9、:only-of-type                 :only-child
10、:empty     p:empty {display: none;}
```

`否定选择器
input:not([type="submit"]) {
}
不是 submit 的 type 全不选`

## 水平垂直居中的实现

```
//绝对定位+transform  可以不知道子盒子宽度和高度
//父亲给一个高度，
position：relative；
//子盒子
position：absolute;
top：50%；
left：50%；
transform：translate（-50%，-50%）
```

```
//绝对定位+margin:auto  适用于子盒子有宽和高
//父亲给一个高度，
position：relative；
//子容器有宽度和高度
position：absolute;
//上下左右都是0，
margin：auto
```

```
//绝对定位+margin负值  适用于已知子盒子宽高
//父亲给一个高度，
position：relative；
//子盒子绝对定位，
position：absolute;
top：50%；
left：50%，
margin-top： - 高度/2 px;
margin-left:- 宽度/2 px
```

```
//flex布局 兼容性，移动端较多使用
//父容器给一个高度，
display：flex;
justify-content：center;
align-items：center；
```

## ES6 新增了哪些方法?

## JavaScript 中的数据类型?

基本数据类型

- String(字符串)
- Number(数字)
- Boolean(布尔)
- undefined
- null
- Symbol (es6 新增)

引用数据类型

- Object 对象
- Array 数组
- Function 函数
- Date
- Math
- 正则 RegExp
- Map (es6)
- Set (es6)

区别 ：两种类型的区别在于存储位置的不同

> 基本数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储

> 引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体

## 深拷贝浅拷贝的区别?

## 什么是防抖和节流?

## 什么原型，原型链 ？

## 说说你对闭包的理解?闭包使用场景

## typeof 与 instanceof 区别?

typeof 和 instanceof 都是用来判断变量类型的，区别在于：

- 1、typeof 判断所有变量的类型，返回值有 number、string、boolean、function、object、undefined。
- 2、typeof 对于丰富的对象实例，只能返回 object，导致有时候得不到真实的数据类型。
- 3、instanceof 用来判断对象，代码形式（obj1 instanceof obj2）（判断 obj1 是否为 obj2 的实例），obj2 必须为对象，否则会报错。返回的是布尔值。
- 4、instanceof 可以对不同的实例对象进行判断，判断方法是根据对象的原型链依次向下查询，如果 obj2 的原型属性存在于 obj1 的原型链上，（obj1 instanceof obj2）值为 true。

## 描述 Promise 的理解?

## React 里面 setstate()函数是同步还是异步? 获取最新的值?

## React 生命周期?

首先生命周期分为三个阶段：<br/>
挂载：已经插入真实 dom<br/>
渲染（更新）：正在被重新渲染<br/>
卸载：已经移出真实 dom<br/>
<image src='https://img-blog.csdnimg.cn/img_convert/696ef3ac7de8357e4c6f0cfccbb26573.png'/>

<image src='https://img-blog.csdnimg.cn/34527b468c47468184820c7c2f14a5d9.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5bCP6Jav54mH5a2Q,size_20,color_FFFFFF,t_70,g_se,x_16'/>

## React 优化?

1.避免使用内联函数。每次 render 渲染时，都会创建一个新的函数实例，应该在组件内部创建一个函数，讲事件绑定到函数，这样每次调用 render 时，就不会创建单独的函数实例。<br/> 2.使用 react fragement 避免额外标记。用户创建新组件时，每个组件应具有单个父标签，父级不能有两个标签。所以顶部要有一个公共标签，所以经常在组件顶部添加额外标签 div，这个 div 标签充当父标签意外，没有其他作用，这个时候可以使用 fragement，它不会向组件引入任何的额外标记，但是可以作为父级标签。<br/> 3.使用 immutable。在 react 中使用 immutablr 能够带来性能优化，主要体现在减少渲染的次数，为了避免重复渲染，会在 shouldComponentUpdate()中做对比，当返回 true，执行 render 方法。immutable 通过 is 方法完成对比。<br/> 4.懒加载组件。从工程方面考虑，webpack 存在代码拆分的能力，可以为应用创建多个包，并在运行时动态加载，减少初始包的大小， 在 react 中使用 Suspense，lazy 组件。下图
<image src='https://img-blog.csdnimg.cn/64575e1be81a4b819353d3b2f84d6820.png'/> 5.事件绑定方式，从性能考虑，在 render 方法中使用 bind 和箭头函数，都会生成新的方法实例，在 constructer 中欧给使用 bind 和箭头函数，性能提高<br/> 6.服务端渲染，可以使用户更快的看到显然成功的页面，服务端渲染可以起一个 node 服务，可以使用 express。koa 等，调用 react 的 renderToString 方法，将跟组件渲染成字符串，再输出到相应中 7.组件拆分，合理使用 hooks

## Vue 的生命周期函数?

vue 生命周期函数也叫 vue 钩子函数

vue 实例的生命周期函数包含有 8 个：beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、beforeDestroy、destroyed

- beforeCreate：创建前，此阶段为实例初始化之后，this 指向创建的实例，此时的数据观察事件机制都还未形成，不能获取 DOM 节点。data、computed、watch、methods 上的方法和数据均不能访问,(可以在这加个 loading 事件)<br/>
- created：创建后，此阶段为实例已经创建，完成数据（data、props、computed）的初始化导入依赖项，可访问 data、computed、watch、methods 上的方法和数据。初始化完成时的数据写在这里，异步请求也适宜在这里调用（请求不宜过多，避免白屏时间太长）。可以在这里结束 loading 事件，还做一些初始化，实现函数自执行。未挂载 DOM,若在此阶段进行 DOM 操作一定要放在 Vue.nextTick()的回调函数中<br/>
- beforeMount：挂载前，虽然得不得具体的 DOM 元素，但 vue 挂载的根节点已经创建，下面 vue 对 DOM 的操作将围绕这个根元素继续进行。beforeMount 这个阶段是过渡性的，一般一个项目只能用到一次<br/>
- mounted：挂载，完成创建 vm.$el、双向绑定、完成挂载 DOM 和渲染，可在 mounted 钩子函数中对挂载的 DOM 进行操作。可在这发起后端请求，拿回数据，配合路由钩子做一些 事情<br/>
- beforeUpdate：数据更新前，数据驱动 DOM。在数据更新后虽然没有立即更新数据，但是 DOM 中的数据会改变，这是 vue 双向绑定的作用。可在更新前访问现有的 DOM，如手动移出添加的事件监听器<br/>
- updated：数据更新后，完成虚拟 DOM 的重新渲染和打补丁。组件 DOM 已完成更新，可执行依赖的 DOM 操作。注意：不要在此函数中操作数据（修改属性），会陷入死循环<br/>
- beforeDestroy：销毁前，可做一些删除提示，如，您确定要删除 xx 吗？<br/>
- destroyed：销毁后，当前组件已被删除，销毁监听事件，组件，事件，子实例也被销毁。这时组件已经没有了，无法操作里面的任何东西<br/>
- activated：在使用 vue-router 时有时需要使用`<keep-alive></keep-alive>`来缓存组件状态，这个时候 created 钩子就不会被重复调用了，如果我们的子组件需要在每次加载的时候进行某些操作，可以使用 activated 钩子触发<br/>
- deactivated：`<keep-alive></keep-alive>`组件在被移除时使用

项目中常用的两个钩子函数是 created 和 mounted,主要来发起网络请求，发起网络请求可以在 mounted 发起，也可以在 created 发起，到底选择哪个发起需要考虑，如果发起的网络请求回来的数据立马去更新 URL 的话最好在 mounted 里面发起，因为如果发起的网络请求以及响应结果比较快,可能还没有 DOM，但是在 mounted 的话，DOM 已经是 Ok 的了，所以这个时候是可以去操作 DOM，但是如果操作时候回来的数据不影响 DOM 操作就可以在 created 里面发起
还有一点呢就是在有些时候在 created 里面如果一定想要去操作 dom 元素，我们可以用到 nextTick()回调函数，如果在项目中像移动端的话，用到`<keep-alive>`这样的缓存，用到这样的缓存我们就多了两个生命周期函数，一个叫 activated,一个叫 deactived，然后如果做一些资源示范的话可以在 destroyed

## Vue3 和 Vue2 区别?

## nextTick()函数作用?

## http 协议常见状态码?(404 20 50 403 301 302 记得有的少?)

## 描述 MVVM?

## 路由 HashRouter 和 HistoryRouter 路由模式的区别?

## Vuex 如何使用? 在组件里面调用?

## vue 里面 watch 和 计算属性?

## watch 是懒侦听 如何立即执行?
