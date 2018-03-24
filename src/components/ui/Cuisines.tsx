import React, { Component } from 'react'
import { connect } from 'react-redux'

import styled from '../../theme/styled'
import { Flex } from '../../components/grid'
import { getCousines } from '../../actions/cuisine'

const CuisineTag = styled('div')`
  border-radius: 6px;
  font-weight: bold;
  padding: 5px;
  color: ${props => props.theme.colors.heading};
  background-color: ${props => props.theme.colors.action};
  cursor: pointer;
  margin-right: 10px;
`

const Wrapper = styled(Flex)`
  margin-top: 10px;
  justify-content: flex-end;
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

export class Cuisines extends Component<CuisineProps> {
  componentDidMount() {
    this.props.getCousines()
  }

  render() {
    const { cuisines } = this.props

    return (
      <Wrapper w={1}>
        {cuisines &&
          cuisines.map(cuisine => (
            <CuisineTag key={cuisine.id} onClick={e => this.props.setCusine(cuisine.id)}>
              {cuisine.name}
            </CuisineTag>
          ))}
        {cuisines && (
          <CuisineTag key={0} onClick={e => this.props.setCusine(0)}>
            All
          </CuisineTag>
        )}
      </Wrapper>
    )
  }
}

export default connect(({ cuisine }) => ({ cuisines: cuisine.cuisines }), { getCousines })(Cuisines)
