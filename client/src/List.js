import React from 'react';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const buttonStyle = {
  marginRight: 0
}

export default class TodoCardList extends React.Component {


  handleDelete = (id) => {
    this.props.deleteTodo(id);
  }

  render() {
    return(
      <div>
          {this.props.items.map((tile) => (
            <Card
              >
              <CardTitle
                title={tile.title}
                subtitle={tile.text}
              />
              <CardActions>
                <FlatButton label="Remove" style={buttonStyle} onClick={() => this.handleDelete(tile._id)}/>
              </CardActions>
            </Card>
          ))}
      </div>
    )
  }
}
