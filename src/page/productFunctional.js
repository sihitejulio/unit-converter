function Product(props) {
  return (
    <div>
        Name :  {props.data.name}
        <br/>
        Color :  {props.data.color}
    </div>
  );
}

export default Product;
