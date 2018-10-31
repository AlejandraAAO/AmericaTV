import React, { Component } from 'react';

const database = window.firebase.database();
const arrayDay = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

class Page404 extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    database.ref('/calendar').once('value').then((snapshot) => {
      this.setState({ data: snapshot.val() })
    });
  }

  render() {
    return (
      <div class="bg-white">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Hora</th>
              <th scope="col">Domingo 4</th>
              <th scope="col">Lunes 5</th>
              <th scope="col">Martes 6</th>
              <th scope="col">Miércoles 7</th>
              <th scope="col">Jueves 8</th>
              <th scope="col">Viernes 9</th>
              <th scope="col">Sabado 10</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.data.map((data, i) => {
                return (
                  <tr>
                    <th scope="row">{i < 10 ? ('0' + i) : i}:00</th>
                    {
                      arrayDay.map(day => {
                        return (<td><a href="#" id={i + "-" + day + "-" + data[day].name + "-" + data[day].price} onClick={this.handleClick.bind(this)}>{data[day].name}</a></td>)
                      })
                    }
                  </tr>
                )
              })
            }
          </tbody>
        </table>

      </div>
    );
  }

  handleClick(e){
    e.preventDefault();
    console.log(e.target.id)
  }
}

export default Page404;
