import {Component} from 'react'

class CountriesList extends Component {
  clickingButton = () => {
    const {eachList, clicksOfVisit} = this.props
    const {id} = eachList
    clicksOfVisit(id)
  }

  render() {
    const {eachList} = this.props
    const {name, isVisited} = eachList

    return (
      <li>
        <p>{name}</p>

        {isVisited ? (
          <p>Visited</p>
        ) : (
          <button type="button" onClick={this.clickingButton}>
            Visit
          </button>
        )}
      </li>
    )
  }
}

export default CountriesList
