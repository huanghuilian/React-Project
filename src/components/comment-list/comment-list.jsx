import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './comment-list.css'
import CommentItem from '../comment-item/comment-item'
export default class CommentList extends Component{
    //声明comments数组,从App组件中传递过来的
    static propTypes = {
        comments:PropTypes.array.isRequired,
        removeComment:PropTypes.func.isRequired
    }
    render(){
        const {comments,removeComment} = this.props
        const isShow = comments.length? 'none': 'block'//如果数组的长度不为0就隐藏，否则显示文字提醒
        return (
                <div className="col-md-8">
                    <h3 className="reply">评论回复：</h3>
                    <h2 style={{display: isShow}}>暂无评论，点击左侧添加评论！！！</h2>
                    <ul className="list-group">
                        {
                            comments.map((comment,index)=> <CommentItem key={index} commentId={index} comment={comment} removeComment={removeComment}/>)
                        }

                    </ul>
                </div>
        )
    }
}