import React,{Component} from 'react'
import PropTypes from 'prop-types'

export default class CommentItem extends Component{
    //从List组件中传递过来的 comment评论项  以及commentId评论项在数组中的下标
    static propTypes = {
        comment:PropTypes.object.isRequired,
        commentId:PropTypes.number.isRequired,
        removeComment:PropTypes.func.isRequired
    }
    removeComment = ()=>{
        const {commentId,removeComment,comment} = this.props
        if (window.confirm(`您真的要删除${comment.name}该条评论吗?`)){
            removeComment(commentId)
        }
    }
    render(){
        const {comment,commentId} = this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.removeComment}>删除</a>
                </div>
                <p className="user"><span>{comment.name}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}