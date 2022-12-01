import React, { useState, useEffect } from 'react';
import { fetchMeResponse } from '../../api/me';
import { MeResponse } from '../../types';
import { InfoPiece } from '../../components/InfoPiece';

import Stack from 'react-bootstrap/Stack';
import Img from 'react-bootstrap/Image';

export function Me() {
  // const [meInfo, setMeInfo] = useState<MeResponse | null>(null);
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchMeResponse();
  //     if (data) {
  //       setMeInfo(data);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const meInfo = {
    profile: "https://www.looper.com/img/gallery/disneys-moana-almost-had-a-completely-different-main-character/intro-1663976926.webp",
    shortIntro: "# hey \n - why",
    workExperience: "hey",
    education: "ayy",
    compSci: "seatefa",
    hobbies: "eafesa"
  }

  if (!meInfo) {
    return <p>loading...</p>;
  }

  return (
    <Stack gap={5} className="col-md-8 mx-auto pt-5 align-items-center">
      <Img src={meInfo.profile} />
      <InfoPiece content={meInfo.shortIntro} />
      <InfoPiece content={meInfo.workExperience} />
      <InfoPiece content={meInfo.education} />
      <InfoPiece content={meInfo.compSci} />
      <InfoPiece content={meInfo.hobbies} />
    </Stack>
  );
}
