import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '&.footer': {
            background: theme.palette.type === 'light' ? '#131316' : theme.palette.background.paper,
            padding: '3rem 1.5rem 4rem',
            color: 'white',
          },
          '& p': {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
          },
          '& .footer__logo--container': {
            '& p': {
              marginTop: theme.spacing(1),
              marginBottom: 0,
            },
          },
          '& .footer__logo': {
            width: '180px',
          },
          '& .footer__copyright': {
            color: '#C4C4C4',
          },
          '& .footer__links': {
            marginTop: '1rem',
          },
          '& h3': {
            color: 'rgba(153, 153, 153, 1)',
            fontWeight: 500,
            marginBottom: theme.spacing(2),
            marginTop: theme.spacing(2),
          },
          '& .links__group': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            '& a': {
              margin: '0.5rem 0',
              color: 'inherit',
              textDecoration: 'none',
              paddingBottom: '1rem',
              borderBottom: 'solid 1px #3c3c3c',
              transition: '0.2s',
              width: '100%',
              '&:hover': {
                color: 'rgba(255,255,255, 0.3)',
              },
            },
            '&.forbole': {
              '& a:last-child': {
                paddingBottom: '0',
                borderBottom: 'none',
              },
            },
            '&.media': {
              display: 'none',
            },
            [theme.breakpoints.up('lg')]: {
              '& a': {
                borderBottom: 'none',
                padding: 0,
                width: 'auto',
              },
              '&.media': {
                display: 'grid',
              },
            },
          },
          [theme.breakpoints.up('lg')]: {
            '&.footer': {
              padding: '3rem 2rem 5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
            },
            '& .footer__links': {
              gridColumn: '2/5',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              marginTop: 0,
            },
            '& h3': {
              fontSize: '1.125rem',
              marginTop: 0,
            },
            '& .footer__social': {
              justifyContent: 'flex-end',
            },
          },
        },
      });
    },
  )();

  return styles;
};
