const express = require('express');
const app = express();
const _ = require('lodash');
var bodyParser = require('body-parser');
const port = 3006;
const cors = require('cors');

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.use(cors());

let notes = [
  {
    id: '1',
    author: 'Hank Schrader',
    description: 'DEA note',
    body:
      'Now look buddy, the last thing I want to do is get you in hot water, but some meth monkey had a feeding frenzy in here.',
    updatedAt: new Date()
  },
  {
    id: '2',
    author: 'Walter White',
    description: 'Heisenberg note',
    body:
      "Jesse, you asked me if i was in the meth business or the money business. Neither. I'm in the empire business.",
    updatedAt: new Date()
  },
  {
    id: '3',
    author: 'Jesse Pinkman',
    description: 'Heisenberg note',
    body:
      'Like I came to you, begging to cook meth. ‘Oh, hey, nerdiest old dude I know, you wanna come cook crystal?’ Please. I’d ask my diaper-wearing granny, but her wheelchair wouldn’t fit in the RV.',
    updatedAt: new Date()
  },
  {
    id: '4',
    author: 'Gustavo Fring',
    description: 'Chicken note',
    body: "How's the chicken taste?",
    updatedAt: new Date()
  },
  {
    id: '5',
    author: 'Mike Ehrmantraut',
    description: 'Badass note',
    body:
      'I’ve known good criminals and bad cops. Bad priests, honorable thieves. You can be on one side of the law or the other. But if you make a deal with somebody, you keep your word. You can go home today with your money and never do this again. But you took something that wasn’t yours. And you sold it for a profit. You’re now a criminal. Good one, bad one? That’s up to you.',
    updatedAt: new Date()
  }
];

app.get('/notes', (req, res) => res.send(notes));

app.get('/notes/:id', (req, res) => {
  const note = _.find(notes, n => n.id === req.params.id);
  console.log('note.updatedAt:', note.updatedAt);
  res.send(note);
});

app.patch('/notes/:id', (req, res) => {
  const note = _.find(notes, n => n.id === req.params.id);

  note.body = req.body.note;
  note.updatedAt = new Date();

  res.send(note);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
