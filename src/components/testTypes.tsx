import React from 'react'

function testTypes() {

  interface User {
    name: string,
    id: number,
    age: number
  }

  const user: User = {
    name: "Rie",
    id: 1,
    age: 30
  }
  // Define the item interface
  interface Item {
    title: string;
    desc: string;
    
  }

  const allItems: Item[] = [
    { title: "Item 1", desc: "Description" },
    { title: "Item 2", desc: "Another description"},
  ];

  return (
    <div>testTypescript</div>
  )
}

export default testTypes