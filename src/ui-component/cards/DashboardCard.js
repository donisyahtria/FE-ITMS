import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Button, Grid, Menu, MenuItem, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

// assets
import EarningIcon from 'assets/images/icons/earning.svg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import GetAppTwoToneIcon from '@mui/icons-material/GetAppOutlined';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyOutlined';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfOutlined';
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: '#fff',
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 180,
    height: 180,
    background: theme.palette.secondary[800],
    borderRadius: '50%',
    bottom: -135,
    right: -50,
    [theme.breakpoints.down('sm')]: {
      bottom: -105,
      right: -140
    }
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 150,
    height: 150,
    background: theme.palette.secondary[800],
    borderRadius: '50%',
    bottom: -110,
    right: 30,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      bottom: -155,
      right: -70
    }
  }
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const DashboardCard = ({ isLoading, icon, title, content }) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>


            <Grid container spacing={2} justifyContent={"space-between"}>
              <Grid container spacing={0} item xs={6}>
                <Grid item xs={5}>
                  <Avatar
                    variant="rounded"
                    sx={{
                      ...theme.typography.commonAvatar,
                      ...theme.typography.largeAvatar,
                      backgroundColor: '#F5F8FF',
                      color: '#1C2D5A',
                      width: 72,
                      height: 72,
                      '& svg': { 
                        fontSize: '3rem',
                      },
                    }}
                  >
                    {icon} {/* <GroupsIcon fontSize='large'/> */}
                  </Avatar>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: '#1C2D5A'
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mt: 1, color:'#EF4123' }}>
                    {content}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item justifyContent={"center"} alignItems={"center"}>
                <Button variant="contained" sx={{borderRadius:"14px", backgroundColor:'#1C2D5A'}} endIcon={<InfoOutlinedIcon />}>
                  Detail
                </Button>
              </Grid>

            </Grid>

          </Box>
        </CardWrapper>
      )}
    </>
  );
};

DashboardCard.propTypes = {
  isLoading: PropTypes.bool
};

export default DashboardCard;
