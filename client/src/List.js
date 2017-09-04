import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const TodoCardList = () => (
  <div>
      {this.props.items.map((tile) => (
        <Card>
          <CardHeader
            title={tile.title}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions>
            <FlatButton label="Remove" onClick={this.props.handleDelete(tile._id)}/>
          </CardActions>
          <CardText expandable={true}>
            {tile.text}
          </CardText>
        </Card>
      ))}
  </div>

);

export default TodoCardList;
