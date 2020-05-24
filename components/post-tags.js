import { memo } from 'react'
import startCase from 'lodash/startCase'
import { Box, Chip } from '@material-ui/core'
import { Label } from '@material-ui/icons'

import theme from 'lib/theme'

import Link from 'components/link'

const PostTags = ({ tags }) => {
  return (
    <Box mt={4} mb={2}>
      {tags
        .filter((t) => t !== 'institucional')
        .map((tag, idx) => (
          <Chip
            css={{
              color: theme.palette.text.hint,
              margin: 2,
              fontSize: '.75rem',
            }}
            component={Link}
            clickable
            href="/tag/[uid]"
            as={`/tag/${tag}`}
            size="small"
            variant="outlined"
            icon={<Label />}
            key={idx}
            label={startCase(tag)}
          />
        ))}
    </Box>
  )
}

export default memo(PostTags)
