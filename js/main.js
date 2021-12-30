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
            search: '',
            searchData: [],
        }
    },
    watch: {
        // 监听input输入框，若没东西了，就回复默认状态
        search:function(newnew,oldold){
          if(newnew == ""){
            // 发请求回到初始列表数据状态
            console.log("搜索框没东西了，回复初始状态");
            app.$data.searchData = app.$data.icons;
          }
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
        getIconsData: function() {
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
        },
        Search: function() {
            // search 是 v-model="search" 的 search
            var search = this.search;
            if (search) {
                this.searchData = this.icons.filter(function(icon) {
                    // 每一项数据
                    // console.log(product)
                    return Object.keys(icon).some(function(key) {
                    // 每一项数据的参数名
                    // console.log(key)
                    return (
                        String(icon[key])
                        // toLowerCase() 方法用于把字符串转换为小写。
                        .toLowerCase()
                        // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
                        .indexOf(search) > -1
                    );
                    });
                });
            }
        }
    },
    beforeCreate: function () {
        // console.log('beforeCreate 创建前状态===============》');
    },
    created: function () {
        // this.getComments();
        // console.log('created 创建完毕状态===============》');
    },
    beforeMount: function () {
        // console.log('beforeMount 挂载前状态===============》');
    },
    mounted: function () {
        this.getIconsData();
        // console.log('mounted 挂载结束状态===============》');
    },
    beforeUpdate: function () {
        // console.log('beforeUpdate 更新前状态===============》'); 
    },
    updated: function () {
        // console.log('updated 更新完成状态===============》');
    },
    beforeDestroy: function () {
        // console.log('beforeDestroy 销毁前状态===============》');
    },
    destroyed: function () {
        // console.log('destroyed 销毁完成状态===============》');
    }
})

//更新年份
document.getElementById('footerYear').innerHTML = new Date().getFullYear() + '';
