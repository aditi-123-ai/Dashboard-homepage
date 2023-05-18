import React, { useState, useEffect } from 'react';
import './App.css';
import './Dashboard.js';
import Dashboard from './Dashboard.js';

const ItemList = ({ items }) => {
  
  return (
    <ul>
      
      {items.map((item) => (
        <li key={item.id}>
          <img src={item.thumbnail} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>Date: {item.date}</p>
        </li>
      ))}
    </ul>
  );
};

const HomePage = ({ items }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    // Filter the items based on search query
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchQuery, items]);

  return (
    <div>
    
    <Dashboard/>
      <div className='container'>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ItemList items={filteredItems} />
    </div>
    </div>
    
  );
};

const App = () => {
  // Sample item data
  const items = [
    {
      id: 1,
      thumbnail: 'https://www.shutterstock.com/image-illustration/neural-network-3d-illustration-big-260nw-1902656500.jpg',
      title: 'Item 1',
      description: 'Description for Item 1',
      date: '3/4/23',
    },
    {
      id: 2,
      thumbnail: 'https://www.shutterstock.com/image-illustration/neural-network-3d-illustration-big-260nw-1902656500.jpg',
      title: 'Item 2',
      description: 'Description for Item 2',
      date: '1/5/23',
    },
    {
      id: 3,
      thumbnail: 'https://www.shutterstock.com/image-illustration/neural-network-3d-illustration-big-260nw-1902656500.jpg',
      title: 'Item 3',
      description: 'Description for Item 3',
      date: '8/12/22',
    },
    {
      id: 4,
      thumbnail: 'https://www.shutterstock.com/image-illustration/neural-network-3d-illustration-big-260nw-1902656500.jpg',
      title: 'Item 4',
      description: 'Description for Item 4',
      date: '7/3/22',

    },
    {
      id: 5,
      thumbnail: 'https://www.shutterstock.com/image-illustration/neural-network-3d-illustration-big-260nw-1902656500.jpg',
      title: 'Item 5',
      description: 'Description for Item 5',
      date: '5/2/22',

    },
    {
      id: 6,
      thumbnail: 'https://www.shutterstock.com/image-illustration/neural-network-3d-illustration-big-260nw-1902656500.jpg',
      title: 'Item 6',
      description: 'Description for Item 6',
      date: '17/7/22',
      
    },
    {
      id: 7,
      thumbnail: 'https://www.shutterstock.com/image-illustration/neural-network-3d-illustration-big-260nw-1902656500.jpg',
      title: 'Item 7',
      description: 'Description for Item 7',
      date: '7/3/22',

    },
    {
      id: 8,
      thumbnail: 'https://www.shutterstock.com/image-illustration/neural-network-3d-illustration-big-260nw-1902656500.jpg',
      title: 'Item 8',
      description: 'Description for Item 8',
      date: '13/4/23',

    },
    
  ];

  return (
    
  <HomePage items={items} />
  )
  ;
};

export default App;
