import React from 'react';

import { Typography} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link'


const Logo = ({variant, displayXS, displayMD, flexGrow}) => {
  return (
    <>
      <AdbIcon sx={{ display: { xs: displayXS, md: displayMD }, mr: 1 }} />
      <Link href={'/'}>
        <Typography
          variant={variant}
          noWrap
          component="a"
          href="/"
          sx={{
            flexGrow: flexGrow,
            mr: 2,
            display: { xs: displayXS, md: displayMD },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          DRE
        </Typography>
      </Link>
    </>
  )
}

export default Logo
