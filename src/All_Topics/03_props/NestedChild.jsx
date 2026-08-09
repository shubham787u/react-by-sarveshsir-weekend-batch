const NestedChild = (props) => {
  console.log(props);

  return (
    <div>
      <h1>I am Nested Child</h1>
      <h2>{props.w}</h2>
    </div>
  );
};

export default NestedChild;
