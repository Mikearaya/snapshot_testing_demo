import './App.css';

import EventItem from './components/EventItem';
import React from 'react';

const events = [
  {
    id: 1,
    name: 'First Event',
    description:
      'To reduce the number of requests to the server, importing images that are less than 10,000 bytes returns a data URI instead of a path. This applies to the following file extensions: bmp, gif, jpg, jpeg, and png. SVG files are excluded due to #1153. You can control the 10,000 byte threshold by setting',
    image: 'image,',
    startDate: new Date().toDateString()
  },
  {
    id: 2,
    name: 'Second Event',
    description:
      'To reduce the number of requests to the server, importing images that are less than 10,000 bytes returns a data URI instead of a path. This applies to the following file extensions: bmp, gif, jpg, jpeg, and png. SVG files are excluded due to #1153. You can control the 10,000 byte threshold by setting',
    image: 'image,',
    startDate: new Date().toDateString()
  },
  {
    id: 3,
    name: 'Second Event',
    description:
      'To reduce the number of requests to the server, importing images that are less than 10,000 bytes returns a data URI instead of a path. This applies to the following file extensions: bmp, gif, jpg, jpeg, and png. SVG files are excluded due to #1153. You can control the 10,000 byte threshold by setting',
    image: 'image,',
    startDate: new Date().toDateString()
  },
  {
    id: 4,
    name: 'fourth Event',
    description:
      'To reduce the number of requests to the server, importing images that are less than 10,000 bytes returns a data URI instead of a path. This applies to the following file extensions: bmp, gif, jpg, jpeg, and png. SVG files are excluded due to #1153. You can control the 10,000 byte threshold by setting',
    image: 'image,',
    startDate: new Date().toDateString()
  }
];

function App() {
  return (
    <ul>
      {events.map(e => {
        return (
          <li className='event-items' key={e.id}>
            <EventItem
              name={e.name}
              description={e.description}
              image={e.image}
              startDate={e.startDate}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default App;
