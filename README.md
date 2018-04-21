### 第一版 React 脚手架的使用实现一个简单的评论发表，评论的删除
    npm i   下载所有相关依赖
    npm start  启动项目

####组件化编码的流程：
    1.拆分组件 ： 将整体拆分为四个组件
    |-------App:整体的父组件
    |----------Add：左侧实现评论添加的组件
    |----------List ：右侧实现评论内容显示的组件
    |--------------Item：评论内容显示列表的列表项
    2.实现静态组件
    3.实现动态组件
-------------------------------------------------------------------------------------
    1.定义四个基本组件
    2.将静态页面拆分到不同的组件中去
        2.1 注意：style属性编码的时候，{{css样式属性名：属性值}}，第一个括号表示jsx的语法，第二个括号表示是一个js对象
        2.2 class属性必须写成className，因为在js中class是一个关键字
        2.3 将每个组件相关联的css文件进行关联
            在主页面 index.html 引入 <link rel="stylesheet" href="./css/bootstrap.css">
        2.4 父组件中引入子组件进行组件标签显示
    3.实现动态组件
        3.1初始化数据的动态显示
            3.1.1 数据存储容器的确定：comments：[{name:username,content:'comment content'},{}.....]
            3.1.2 App组件定义状态state，将state.comments传递给List组件；
                  List组件进行声明接收数据进行列表显示，遍历comments数组，将评论数组中的每一项交给CommentItem组件进行显示列表
                  还有就是将map()遍历数组的下标传到CommentItem组件中，作为删除目标对象的一个标识
            3.1.3
        3.2交互
            3.2.1 提交评论内容;
                1. 由于组件对象的state在哪里定义，修改state的操作也就只能在定义的组件中进行；
                    所以在App中定义一个AddComment方法，将该方法传递给CommentAdd组件;CommentAdd组件进行声明接收；
                2. 为提交按钮绑定监听事件;输入框标签设置ref属性，ref={input=>this.name = input} ref={input=>this.content = input}
                3. 定义新增评论事件的方法；首先先获取评论者输入的数据，通过this.name和this.content；注意：这只是获取到标签元素；
                    ** 判断输入的内容是否为空，为空将不进行后续新增操作
                    ** 将获取到的数据封装成对象
                    ** 调用父组件App的修改状态state的方法 实现评论的新增
                    ** 清空输入框中的值
            3.2.1 删除评论内容
                1.App中定义一个removeComment方法，将该方法传递给CommentList组件;CommentList组件进行声明接收；CommentList组件再将其传给CommentItem组件
                2.为删除a标签绑定事件监听
                     removeComment = ()=>{
                            const {commentId,removeComment,comment} = this.props
                            if (window.confirm(`您真的要删除${comment.name}该条评论吗?`)){
                                removeComment(commentId)
                            }
                        }
