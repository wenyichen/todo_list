import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const tilesData = [
  {
    title: 'Breakfast',
    text: 'jill111',
  }
];

export default class TodoCardList extends React.Component {

  handleDelete = (id) => {
    this.props.deleteTodo(id);
  }

  render() {
    return(
      <div>
          {tilesData.map((tile) => (
            <Card>
              <CardHeader
                title={tile.title}
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardActions>
                <FlatButton label="Remove" onClick={() => this.handleDelete(tile._id)}/>
              </CardActions>
              <CardText expandable={true}>
                {tile.text}
              </CardText>
            </Card>
          ))}
      </div>
    )
  }
}
