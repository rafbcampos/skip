import React from 'react'

import { H3 } from '../components/typography'
import { Flex } from '../components/grid'
import styled from '../theme/styled'

const DashboardWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  width: 100vw;
  color: 'red';
`

export const Dashboard = () => (
  <DashboardWrapper>
    <H3>You are logged! Yeah!</H3>
  </DashboardWrapper>
)
