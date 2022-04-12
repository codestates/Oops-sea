import React from 'react';
import styled from 'styled-components'
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 3rem;
`;

const ProfilePosition = styled.div`
  position: absolute;
`;

const ProfileImagePosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  position: relative;
  object-fit: contain;
  padding: 5rem 2rem 5rem 2rem;
  width: 25vw;
  height: 50vh;
`;


const DescriptionWrapper = styled.div`
  width: 25vw;
  margin-left: 4rem;
  margin-top: 5rem;
`;

const StyledDescriptionHeader = styled.h4`
  margin: 3rem 0 1rem 0;
`;

const StyledDescriptionContent = styled.div`
  max-height: 10rem;
  overflow: auto;
  padding: 0 1rem 1rem 1rem;
  border-bottom: 1.5px solid;
  border-color: rgba(57, 102, 249, 0.5);
`;

const StyledBy = styled.div`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.4);
`;

const Detail = () => {
  return (
    <>
      <Grid container spacing={1} marginTop={3}>
        <Grid item md={6}>
          <ProfileWrapper>
            <ProfilePosition>
              {/*<ProfileBackground />*/}
            </ProfilePosition>
            <ProfileImagePosition>
              <ProfileImage src='/asdf.png' />
            </ProfileImagePosition>
          </ProfileWrapper>
        </Grid>
        <Grid item md={6}>

          <DescriptionWrapper>
            <Card >
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  MISS THING
                </Typography>
                <Typography variant="h5" component="div">
                  💎Miss Thing #014
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Owned by
                  VibesMuseum
                </Typography>
                <Typography variant="body2">
                  가격 : 10 ETH
                </Typography>
              </CardContent>
              <CardActions sx={{display: "flex", justifyContent: "center"}}>
                <Button variant="contained">구매하기</Button>
              </CardActions>
            </Card>
            <StyledDescriptionContent>
              <p>The Lobstars is a collection of 7777 lobster portraits by British contemporary artist, Philip Colbert, often referred to as ‘the godson of Andy Warhol’. He and his lobster character are world renowned and have exhibited in galleries across the globe. Colbert has collaborated with luxury brands such as Bentley Motors, Rolex, MontBlanc, Christian Louboutin, COMME des GARÇONS and Adidas. Each Lobstar token will come complete with a passport ID for Lobsteropolis. The Lobstars will fund research on the Lobster species, support 1 Lobster released in the wild per NFT minted, develop Lobster Robotics with the UCL Robotics lab, and continue to collaborate with other incredible brands and NFT projects, as well activate his beautiful Lobster artwork in more physical and digital spaces.</p>
            </StyledDescriptionContent>
          </DescriptionWrapper>
        </Grid>
      </Grid>
    </>
  );
}
export default Detail;