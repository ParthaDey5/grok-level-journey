import React from 'react'

function testTypescript() {

    interface User {
        name: string,
        id: number,
        age: number
    }

    const user: User= {
        name: "Rie",
        id: 1,
        age: 30
    }
  return (
    <div>testTypescript</div>
  )
}

export default testTypescript