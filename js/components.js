//header
Vue.component('navbar', {
    template: `<nav class="天杆">
                <div class="nav-container container">
                    <a class="nav-logo" href="./index.html">
                        <img src="/img/logo.png"/>
                    </a>
                    <div class="nav-main">
                        <ul>
                            <li><a href="./index.html">首页</a></li>
                            <li><a href="./icons.html">浏览图标</a></li>
                            <li><a href="./about.html">关于</a></li>
                        </ul>
                    </div>
                    <a title="Github" class="nav-btn" target="_blank" href="https://gitee.com/chiven-young/Yo-ho-Scrawl-Icons"><i class="iconfont icon-github-fill"></i></a>
                </div>
            </nav>`
})

//footer
Vue.component('footer-content', {
    template: `<footer class="地杆">
                <div class="container">
                    <span class="copyright">Copyright © <span id="footerYear">2020</span> <i class="iconfont icon-chiven-line"></i>人寻(Chiven Young) 保留所有权利.&emsp;&emsp;</span>
                    <div class="footer-links">
                        <a href="./copyright.html">版权声明</a><span class="split-line">|</span>&emsp;
                        <a href="./agreement.html">使用协议</a><span class="split-line">|</span>&emsp;
                        <a target="_blank" href="https://www.chiven.net/archives/yo-ho-scrawl-icons-comments.html">意见反馈</a><span class="split-line">|</span>&emsp;
                        <a href="./about.html">关于《一函碎念》</a><span class="split-line">|</span>&emsp;
                        <a target="_blank" href="https://www.chiven.net">作者网站</a>
                    </div>
                    <div class="beian">
                        <a href="https://beian.miit.gov.cn/#/Integrated/index">豫ICP备2020027432号</a>
                        <img src="https://www.chiven.net/img/batb.png">
                        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030702003271">粤公网安备44030702003271号</a>
                        <span>联系邮箱：hi@chiven.net</span>
                    </div>
                </div>
            </footer>`
})

// 下载弹窗
Vue.component('download-dialog-content',{
    template: `<div>
    <h1>下载图标</h1>
        <p>在下载前请认真阅读《使用协议》，若您已开始下载，则表明您已同意该协议。</p>
        <div>
            <a href="./agreement.html">使用协议</a>&emsp;<span class="split-line">|</span>&emsp; 
            <a href="./copyright.html">版权声明</a>
        </div><br>
        <p>链接:<a target="_blank" href="https://pan.baidu.com/s/1hOuUiqa56yyjBpu9PZWsTQ">https://pan.baidu.com/s/1hOuUiqa56yyjBpu9PZWsTQ</a> 提取码:4sji</p>
    </div>`
})

// 图标声明脚注
Vue.component('footnotes-explain', {
    template: `<div class="footnotes">
                *《一函碎念》开放给所有人永久免费使用，本人（人寻/Chiven Young）保留《一函碎念》版权所有权。
                <br>
                1. 这里只展示部分图标。
                <br>
                2. 由于本人太忙<span style="text-decoration:line-through">（懒）</span>，建议感兴趣的主题开发者使用《一函碎念》开发属于自己的主题，主题版权和收益归主题开发者所有。详细请查看 <a href="./agreement.html">《使用协议》</a>。
                此信息更新于 2021 年 11 月 19 日。
            </div>`
})