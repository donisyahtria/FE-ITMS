import React from 'react';
import { Container, Typography } from '@mui/material';


const Header = ({ title }) => {
    const headerStyle = {
        width: '100%',
        height: 'fit-content', // Hug (64px) is equivalent to fit-content in this context
        padding: '16px 24px',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: "12px"

    };

    const titleStyle = {
        margin:0, // Adjust the margin as needed
        fontSize: '24px',
        color:'#4F4F4F',
        alignItems: 'center',
        fontWeight:'bold'
    };

  return (
    <>
        <Container style={{padding:0}}>
            <div className="card" style={headerStyle} >
                <div style={{display:'flex'}}>
                    <Typography style={ titleStyle }>{title}</Typography>

                    
                </div>
            </div>
           
        </Container>
    </>
  );
};

export default Header;
