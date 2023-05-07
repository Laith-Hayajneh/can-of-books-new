import React, { Component } from 'react';

class UpdateBook extends Component {
    render() {
        return (
            <div>
                {this.props.oldBookData&& 
                
                <form onSubmit={this.props.updateBookNew}>
                    <input placeholder='name of book' name='bookName' defaultValue={this.props.oldBookData.name}/>
                    <input placeholder='dscriptions' name='description' defaultValue={this.props.oldBookData.dscriptions}/>
                    <input placeholder='book status ' name='bookStatus' defaultValue={this.props.oldBookData.status}/>
                    <input type='submit' value={'update book'}/>
                </form>
                }
                
            </div>
        );
    }
}

export default UpdateBook;