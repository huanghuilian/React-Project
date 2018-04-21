//这是一个父组件
import React, {Component} from 'react'//react核心库无论组件是否使用了都必须使用

import CommentAdd from './components/comment-add/comment-add'
import CommentList from './components/comment-list/comment-list'

export default class App extends Component{
    //3.1.1 初始化state
    state ={
        comments:[
            {name:'Tom',content:'react太难了'},
            {name:'Jane',content:'react太简单了'},
            {name:'Jack',content:'react just so so'}
        ]
    }
    // 定义修改（新增）状态的方法
    AddComment = (comment)=>{
        //获取当前的state
        const {comments} = this.state
        //修改state
        comments.unshift(comment)
        //更新state
        this.setState({
            comments
        })
    }
    //定义实现删除评论操作修改state的方法   这个方法真正是由CommentItem组件进行调用的；可通过组件传递
    removeComment = (index)=>{
        const {comments} = this.state
        comments.splice(index,1)
        this.setState({
            comments
        })
    }
    render(){
        const {comments} = this.state
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd AddComment={this.AddComment}/>
                    <CommentList comments={comments} removeComment={this.removeComment}/>
                </div>
            </div>
        )
    }
}
