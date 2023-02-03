import { base } from '@theme-ui/presets';
import { Theme } from 'theme-ui';

const makeTheme = <T extends Theme>(t: T) => t

const theme = makeTheme({
  ...base,
  styles: {
    ...base.styles
  },
  nav: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '1em',
    margin: '0 2em',
    position: 'sticky', 
    background: '#161616', 
    borderRadius: '1vw',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  },
  link: {
    px: '1rem',
    py: 1,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    textDecoration: 'none',
    color: '#FFF'
  }
})

export default theme