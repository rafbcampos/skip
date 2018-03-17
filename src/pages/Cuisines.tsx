import React, { Component } from 'react'
import { connect } from 'react-redux'

import styled from '../theme/styled'
import { Flex } from '../components/grid'
import { getCousines } from '../actions/cuisine'

const CuisineTag = styled('div')`
  border-radius: 6px;
  font-weight: bold;
  padding: 5px;
  color: ${props => props.theme.colors.heading};
  background-color: ${props => props.theme.colors.action};
  cursor: pointer;
`

interface Cuisine {
  id: number
  name: string
}

interface CuisineProps {
  getCousines: Function
  cuisines: Cuisine[]
  setCusine: Function
}

class Cuisines extends Component<CuisineProps> {
  componentDidMount() {
    this.props.getCousines()
  }

  render() {
    const { cuisines } = this.props

    return (
      <Flex>
        {cuisines &&
          cuisines.map(cuisine => (
            <CuisineTag
              key={cuisine.id}
              onClick={e => this.props.setCusine({ cusine: cuisine.id })}
            >
              {cuisine.name}
            </CuisineTag>
          ))}
      </Flex>
    )
  }
}

export default connect(({ cuisine }) => ({ cuisines: cuisine.cuisines }), { getCousines })(Cuisines)
