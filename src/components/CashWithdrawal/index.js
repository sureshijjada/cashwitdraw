// Write your code here
// import {Component} from 'react'
// import DenominationItem from '../DenominationItem'

// class CashWithdrawal extends Component {
//   state = {money: 2000}

//   setChange = value => {
//     this.setState(prevState => ({money: prevState.money - value}))
//   }

//   render() {
//     const {denominationsList} = this.props
//     const {money} = this.state

//     return (
//       <div className="card">
//         <div>
//           <p> S</p>
//         </div>
//         <div>
//           <p>Sarah Williams</p>
//         </div>
//         <div>
//           <div>
//             <p>Your Balance</p>
//           </div>
//           <div>
//             <p> {money}</p>
//           </div>
//           <p> In Rupees</p>
//         </div>
//         <p>Withdraw</p>
//         <p>CHOOSE SUM (IN RUPEES)</p>
//         <ul>
//           {denominationsList.map(each => (
//             <DenominationItem
//               key={each.id}
//               value={each.value}
//               setChange={this.setChange}
//             />
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }

// export default CashWithdrawal
import {Component} from 'react'
import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {money: 2000}

  onChange = value => {
    const {money} = this.state
    const balance = money - value
    if (balance >= 0) {
      this.setState({money: balance})
    }
  }

  render() {
    const {money} = this.state
    const {denominationsList} = this.props

    return (
      <div className="container">
        <div className="card">
          <div className="topcard">
            <div className="logo">
              <p className="logop">S</p>
            </div>
            <h1 className="heading">Sarah William</h1>
          </div>
          <div className="secondcard">
            <p className="rupee">Your Balance</p>
            <p className="amount">
              {money} <span className="span">Rupees</span>
            </p>
          </div>
          <div className="subhead">
            <p className="subheading">Withdraw</p>
            <p className="paragraph">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="ul">
            {denominationsList.map(item => (
              <DenominationItem
                amount={item}
                key={item.id}
                onChange={this.onChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
