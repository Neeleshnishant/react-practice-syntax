import {Component} from 'react'

class RemoveList extends Component {
  clickingRemove = () => {
    const {eachList, clickOfRemove} = this.props
    const {id} = eachList
    clickOfRemove(id)
  }

  renderList = () => {
    const {eachList} = this.props
    const {name, isVisited, imageUrl, id} = eachList
    return isVisited ? (
      <li key={id}>
        <img src={imageUrl} alt="thumbnail" />
        <p>{name}</p>
        <button type="button" onClick={this.clickingRemove}>
          Remove
        </button>
      </li>
    ) : null
  }

  render() {
    const {eachList} = this.props
    const {name, isVisited, imageUrl, id} = eachList
    return (
      <div>
        <ul>{this.renderList()}</ul>
      </div>
    )
  }
}

export default RemoveList

// isVisited ? (
//             <li key={id}>
//               <img src={imageUrl} alt="thumbnail" />
//               <p>{name}</p>
//               <button type="button" onClick={this.clickingRemove}>
//                 Remove
//               </button>
//             </li>
//           ) : null
