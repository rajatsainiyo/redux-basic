import React from 'react'

class Class extends React.Component {

  constructor() {
    super();
    this.state = {
      Todoarry: [],
      value: "",
      update: false,
      id:'',
      updata:'',
    };
  }
  feild = (e) => {
    this.setState({ value: e.target.value })
  }

  Addtask = () => {
    this.setState({ value: "" })
    const obj = {
      name: this.state.value,
    }
    if (this.state.value !== "") {
      this.setState({ Todoarry: this.state.Todoarry.concat(obj) })
    }
  }

  delete = (ItemId) => {
    this.setState({
      Todoarry: [...this.state.Todoarry].filter((val, i) => {
        return i !== ItemId
      })
    })
  }

  edittask = (edval,index) => {
    this.setState({ value: edval.name })
    this.setState({ update: true })
    this.setState({
      id:index
    })
    this.setState({
      updata:edval
    })
  //  console.log(index,'edt');
  }

  Updateedt = (e,i) => {
// this.setState({
//   Todoarry:this.state.Todoarry[this.state.id].name=this.state.value
// })
let data = this.state.Todoarry[this.state.id]=this.state.value
  console.log(data,'dd');
  }


  render() {

    const mylist = this.state.Todoarry.map((item, index) => {
      return (
        <li key={index}>{item.name} <button onClick={() => this.delete(index)}>del</button>

          <button onClick={() => this.edittask(item,index)}>Edit</button>
        </li>)
    })


    return (<>

      <input onChange={this.feild} type="text" value={this.state.value} />

      {this.state.update === false ? <button onClick={() => this.Addtask()}>user data</button> : <button onClick={(e,i) => this.Updateedt(e,i)}>Update</button>}

      <ul><li>{mylist}</li></ul>
    </>)
  }
}
export default Class
