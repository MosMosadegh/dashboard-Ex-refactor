import React, { Component } from 'react'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'


export default class Todo extends Component {

    removeMetode(todoid){
this.props.onRemove(todoid)
    }
    editMetode(todoid){
this.props.onEdit(todoid)
    }
    render() {
        return (
            // 'completed' class for completed todos
            <div className={`todo ${this.props.completed ?'completed': ''}`} style={{ display: 'flex' }}>
                <li className="todo-item">{this.props.title}</li>

                <button className="check-btn" onClick={this.editMetode.bind(this, this.props.id)}>
                    <AiOutlineCheckCircle/>
                </button>

                <button className="trash-btn" onClick={this.removeMetode.bind(this, this.props.id)}>
                    <BsTrash/>
                </button>
            </div>
        )
    }
}