import React, {Fragment} from "react";
import '../Todo/Todo.css';

class Todo extends React.Component {
    state = {info:[]}

    saveAction = () => {
        var data = this.state.info;
        data.push({title:this.state.new});
        this.setState({info:data});
    }

    updateState = (event) => {
        this.setState({new:event.target.value});   
    }

    searchState = (event) => {
        this.setState({search:event.target.value});
    }

    deleteAction = (sIndex) => {
        var data = this.state.info;
        delete data[sIndex];
        this.setState({info:data});
    }

    render() {
        return (
            <>
                <div className="main-container">
                    <h4>Todo ReactJS App</h4>
                    <input type="text" placeholder="Add todo" className="txt-btn" onChange={this.updateState}/><button className="sub-btn" onClick={this.saveAction}>Add New Todo</button>
                    <input type="text" placeholder="Search todo list...." className="txt-btn" onChange={this.searchState}/>
                    <h4>Todo List</h4>
                    <table className="data-list">
                        <tbody>
                            <tr className="tbl-heading">
                                    <td>Id</td>
                                    <td>Title</td>
                                    <td>Action</td>
                            </tr>
                            {this.state.info.map((subItems, sIndex) => {
                                if(this.state.search === subItems.title) {
                                    return <tr key={sIndex} className="highlight"><td>{sIndex+1}</td><td>{subItems.title}</td><td><button onClick={() => this.deleteAction(sIndex)}>Delete</button></td></tr>
                                } else {
                                    return <tr key={sIndex}><td>{sIndex+1}</td><td>{subItems.title}</td><td><button onClick={() => this.deleteAction(sIndex)}>Delete</button></td></tr>
                                }                                    
                            })}
                        </tbody>                    
                    </table>
                </div>                
            </>
        )        
    }
}

export default Todo;