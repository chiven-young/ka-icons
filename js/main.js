var app = new Vue({
    el: '#app',
    data () {
        return {
            dialogVisible: "",
            commentDialogVisible: false,
            downloadDialogVisible: false,
            fullscreenLoading: false,
            commentsNum: "0",
            comments: [],
            commentText: "",
            updateTimeAll: "2021.12.12",
            icons: [],
            themes: [],
        }
    },
    methods: {
        getComments: function() {
            var request = new XMLHttpRequest();
            var that = this;
            request({
                url: this.appendAPISEC(API_URL + 'getcomment?cid=' + that.cid),
                success: function(res) {
                    that.comments = res.data.data;
                }
            })
        },
    },
    beforeCreate: function () {
        console.log('beforeCreate 创建前状态===============》');
    },
    created: function () {
        // this.getComments();
        console.log('created 创建完毕状态===============》');
    },
    beforeMount: function () {
        console.log('beforeMount 挂载前状态===============》');
    },
    mounted: function () {
        axios
        .get('../assets/icons.json')
        .then(response => (this.icons = response.data.itemsList))
        .catch(function (error) { // 请求失败处理
            console.log(error);
        });
        axios
        .get('../assets/themes.json')
        .then(response => (this.themes = response.data.themes))
        .catch(function (error) { // 请求失败处理
            console.log(error);
        });
        console.log('mounted 挂载结束状态===============》');
    },
    beforeUpdate: function () {
        console.log('beforeUpdate 更新前状态===============》'); //这里指的是页面渲染新数据之前
    },
    updated: function () {
        console.log('updated 更新完成状态===============》');
    },
    beforeDestroy: function () {
        console.log('beforeDestroy 销毁前状态===============》');
    },
    destroyed: function () {
        console.log('destroyed 销毁完成状态===============》');
    }
})

//更新年份
document.getElementById('footerYear').innerHTML = new Date().getFullYear() + '';
