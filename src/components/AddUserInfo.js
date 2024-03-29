import React, { useState } from "react";

// class AddUserInfo extends React.Component {
//   state = {
//     name: "",
//     address: "Tin FullStack",
//     age: "",
//   };
//   handleClick = (event) => {
//     //dùng arowFunction để fix lỗi
//     console.log("click me my button");

//     //merge state => react class
//     this.setState({
//       name: "Tin Devoloper",
//       age: Math.floor(Math.random() * 100 + 1),
//     });
//   };
//   handleOnChangeInput(event) {
//     this.setState({
//       name: event.target.value,
//     });
//   }
//   handleOnChangeAge(event) {
//     this.setState({
//       age: event.target.value,
//     });
//   }
//   handleOnChangeSubmit = (event) => {
//     event.preventDefault();

//     this.props.handleAddNewUser({
//       ID: Math.floor(Math.random() * 100 + 1) + " - random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };

//   render() {
//     return (
//       <div>
//         My name is {this.state.name} and I {this.state.age} old
//         <button onClick={this.handleClick}>click me</button>
//         <button onMouseOver={this.handOnMouseOver}>Hover me</button>
//         <form
//           action=""
//           onSubmit={(event) => {
//             this.handleOnChangeSubmit(event);
//           }}
//         >
//           <label htmlFor="">Enter name ...</label>
//           <input
//             type="text"
//             placeholder="what your name ?"
//             onChange={(event) => this.handleOnChangeInput(event)}
//           />
//           <br />
//           <label htmlFor="">Enter age ...</label>
//           <input
//             type="text"
//             placeholder="enter age ?"
//             onChange={(event) => this.handleOnChangeAge(event)}
//           />
//           <button type="submit">submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfo = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("Tin FullStack");
  const [age, setAge] = useState("");
  // const handleClick = (event) => {
  //   //dùng arowFunction để fix lỗi
  //   console.log("click me my button");

  //   //merge state => react class
  //   this.setState({
  //     name: "Tin Devoloper",
  //     age: Math.floor(Math.random() * 100 + 1),
  //   });
  // };
  const handleOnChangeInput = (event) => {
    // this.setState({
    //   name: event.target.value,
    // });
    setName(event.target.value);
  };
  const handleOnChangeAge = (event) => {
    // this.setState({
    //   age: event.target.value,
    // });
    setAddress(event.target.value);
  };
  const handleOnChangeSubmit = (event) => {
    event.preventDefault();

    props.handleAddNewUser({
      ID: Math.floor(Math.random() * 100 + 1) + " - random",
      name: name,
      age: age,
    });
  };
  return (
    <div>
      My name is {name} and I {age} old
      {/* <button onClick={handleClick}>click me</button>
      <button onMouseOver={handOnMouseOver}>Hover me</button> */}
      <form
        action=""
        onSubmit={(event) => {
          handleOnChangeSubmit(event);
        }}
      >
        <label htmlFor="">Enter name ...</label>
        <input
          type="text"
          placeholder="what your name ?"
          onChange={(event) => handleOnChangeInput(event)}
        />
        <br />
        <label htmlFor="">Enter age ...</label>
        <input
          type="text"
          placeholder="enter age ?"
          onChange={(event) => handleOnChangeAge(event)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddUserInfo;
