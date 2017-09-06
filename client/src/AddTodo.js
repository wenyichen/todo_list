import React from 'react';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import ContentAdd from 'material-ui/svg-icons/content/add';

const buttonstyle = {
  position: "fixed",
  bottom: 40,
  right: 40
};

export default class AddTodo extends React.Component {
  state = {
    title: '',
    text: '',
    open: false
  };

  handleTitleChange = (event) => {
    this.setState({title: event.target.value});
  };

  handleTextChange = (event) => {
    this.setState({text: event.target.value});
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({title: '', text: '', open: false});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.title, this.state.text);
    this.setState({title: '', text: '', open: false});
  };

  render() {
    return (
      <div>
        <FloatingActionButton label="Dialog" onClick={this.handleOpen} style={buttonstyle}>
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="Add a todo"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <form onSubmit={this.handleSubmit}>
          <TextField
            hintText="Give your todo a title"
            floatingLabelText="Title"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <br />
          <TextField
            floatingLabelText="Description"
            hintText="What would you like to do?"
            multiLine={true}
            rows={2}
            rowsMax={4}
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <div style={{ textAlign: 'right', padding: 8, margin: '24px -24px -24px -24px' }}>
            <FlatButton
              label="Cancel"
              primary={false}
              onClick={this.handleClose}
            />
            <FlatButton
              label="Submit"
              primary={true}
              type="submit"
            />
          </div>
        </form>
        </Dialog>
      </div>
    );
  }
}
