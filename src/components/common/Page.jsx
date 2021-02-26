import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  box: ({ availableHeight }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    height: availableHeight,
  }),
  title: {
    padding: `${theme.spacing(2.5)}px ${theme.spacing(3)}px`,
    fontSize: 24,
    fontWeight: 600,
    flexGrow: 0,
  },
  content: ({ hasFooter }) => ({
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(3) + (hasFooter ? 67 : 0),
    backgroundColor: theme.palette.background.light,
    flexGrow: 1,
  }),
}))

export default ({ children, className, hasFooter, title }) => {
  const classes = useStyles({ hasFooter })

  return (
    <Box className={classes.box + ' ' + className}>
      {title && (
        <Typography variant="h4" color="primary" className={classes.title}>
          {title}
        </Typography>
      )}
      <Box className={classes.content}>{children}</Box>
    </Box>
  )
}
