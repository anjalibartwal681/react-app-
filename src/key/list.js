function MyList() {
    const items = [
      { id: 1, fname: "apple" },
      { id: 2, fname: "banana" },
      { id: 3, fname: "orange" },
    ];
  
    return (
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            Index: {index}, ID: {item.id}, Name: {item.fname}
          </li>
        ))}
      </ul>
    );
  }
  
  export default MyList;
  