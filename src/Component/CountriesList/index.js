import {Component} from 'react'
import EachCountries from '../EachCountries'
import RemoveList from '../RemoveList'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

class CountriesList extends Component {
  state = {activeCountriesList: initialCountriesList}

  clicksOfVisit = id => {
    const {activeCountriesList} = this.state

    const filterVisit = activeCountriesList.map(each => {
      if (each.id === id) {
        return {...each, isVisited: true}
      }
      return {...each}
    })

    this.setState({activeCountriesList: filterVisit})
  }

  clickOfRemove = id => {
    const {activeCountriesList} = this.state

    const removeList = activeCountriesList.map(each => {
      if (each.id === id) {
        return {...each, isVisited: false}
      }
      return {...each}
    })
    console.log(removeList)
    this.setState({activeCountriesList: removeList})
  }

  filterList = () => {
    const {activeCountriesList} = this.state
    const filteringList = activeCountriesList.filter(
      each => each.isVisited === true,
    )
    return filteringList
  }

  render() {
    const {activeCountriesList} = this.state
    const filteringList = this.filterList()
    console.log(filteringList)
    return (
      <div>
        <h1>Countries</h1>
        <ul>
          {activeCountriesList.map(each => (
            <EachCountries
              eachList={each}
              clicksOfVisit={this.clicksOfVisit}
              key={each.id}
            />
          ))}
        </ul>
        <div>
          <ul>
            {filteringList.length === 0 ? (
              <p>No Countries Visited Yet</p>
            ) : (
              <div>
                <h1>Visited Countries</h1>
                {activeCountriesList.map(eachRem => (
                  <RemoveList
                    eachList={eachRem}
                    key={eachRem.id}
                    activeCountriesList={activeCountriesList}
                    clickOfRemove={this.clickOfRemove}
                  />
                ))}
              </div>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default CountriesList
