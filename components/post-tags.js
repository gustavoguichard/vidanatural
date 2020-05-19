import { memo } from 'react'
import startCase from 'lodash/startCase'
import { Box, Chip } from '@material-ui/core'
import { Label } from '@material-ui/icons'

import theme from 'lib/theme'

// import Link from 'components/link'
// component = { Link }
// clickable
// href = '#chip'

const PostTags = ({ tags }) => {
  return (
    <Box mt={4} mb={2}>
      {tags.map((tag, idx) => (
        <Chip
          css={{ margin: 2, fontSize: '.75rem' }}
          size="small"
          variant="outlined"
          color="textHint"
          icon={<Label />}
          key={idx}
          label={startCase(tag)}
        />
      ))}
    </Box>
  )
}

export default memo(PostTags)
