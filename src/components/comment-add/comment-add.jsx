import React,{Component} from 'react'
import PropTypes from 'prop-types'

export default class CommentAdd extends Component{
    // AddComment()
    static propTypes = {
        AddComment:PropTypes.func.isRequired
    }
    Add = ()=> {
        const name = this.name.value.trim()
        const content = this.content.value.trim()
        //判断输入的内容是否为空，为空将不进行后续新增操作
        if(!name||!content){
            return
        }
        //将获取到的数据封装成对象
        const comment = {name,content}
        //调用父组件App的修改状态state的方法 实现评论的新增
        this.props.AddComment(comment)
        //清空输入框中的值
        this.name.value = ''
        this.content.value = ''
    }
    render(){
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" ref={input=>this.name = input}/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" ref={input=>this.content = input}></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.Add}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}