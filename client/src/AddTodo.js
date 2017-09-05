import React from 'react';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import ContentAdd from 'material-ui/svg-icons/content/add';

const buttonstyle = {
  marginTop: 20,
  marginRight: 40,
  float: "right"
};

export default class AddTodo extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleSubmit = () => {
    this.setState({open: false});
    this.props.addTodo(this.state.title, this.state.text);
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
          /><br />
          <TextField
            floatingLabelText="Description"
            hintText="What would you like to do?"
            multiLine={true}
            rows={2}
            rowsMax={4}
            value={this.state.text}
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
