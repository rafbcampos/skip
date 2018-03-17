import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { Paragraph, Small, Lead, A, H0, H1, H2, H3, H4, H5, H6 } from './'

storiesOf('Typograpy', module).add(
  'Typograpy',
  withInfo(`
      Typograpy:

    `)(() => (
    <Fragment>
      <H0>H0: The quick brown fox jumps over the lazy dog.</H0>
      <H1>H1: The quick brown fox jumps over the lazy dog.</H1>
      <H2>H2: The quick brown fox jumps over the lazy dog.</H2>
      <H3>H3: The quick brown fox jumps over the lazy dog.</H3>
      <H4>H4: The quick brown fox jumps over the lazy dog.</H4>
      <H5>H5: The quick brown fox jumps over the lazy dog.</H5>
      <H6>H6: The quick brown fox jumps over the lazy dog.</H6>
      <Paragraph>
        Paragraph - The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the
        lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the
        lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the
        lazy dog.
      </Paragraph>
      <div style={{ marginTop: '20px' }} />
      <Small>
        Small - The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy
        dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy
        dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy
        dog.
      </Small>
      <div style={{ marginTop: '20px' }} />
      <Lead>
        Lead - The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy
        dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy
        dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy
        dog.
      </Lead>
      <div style={{ marginTop: '20px' }} />
      <A>Anchor - The quick brown fox jumps over the lazy dog.</A>
    </Fragment>
  )),
)
