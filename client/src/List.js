import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const tilesData = [
  {
    title: 'example',
    text: 'example',
    done: false
  },
];

const TodoCardList = () => (
  <div>
      {tilesData.map((tile) => (
        <Card>
          <CardHeader
            title={tile.title}
            subtitle={tile.done ? 'Done' : 'Incomplete'}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions>
            <FlatButton label="Remove" />
          </CardActions>
          <CardText expandable={true}>
            {tile.text}
          </CardText>
        </Card>
      ))}
  </div>

);

export default TodoCardList;
