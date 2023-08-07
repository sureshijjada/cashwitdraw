// Write your code here

// const DenominationItem = props => {
//   const {value, setChange} = props

//   const changeSet = () => {
//     setChange(value)
//   }

//   return (
//     <li>
//       <button type="button" onClick={changeSet}>
//         {value}
//       </button>
//     </li>
//   )
// }

// export default DenominationItem

import './index.css'

const DenominationItem = props => {
  const {amount, onChange} = props
  const {value} = amount

  const onModify = () => {
    onChange(value)
  }
  return (
    <li className="li">
      <div className="buttondiv">
        <button className="button" type="button" onClick={onModify}>
          {value}
        </button>
      </div>
    </li>
  )
}

export default DenominationItem
