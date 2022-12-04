import React, { useState, useEffect } from 'react';

import { MeResponse } from '../../types';
import { fetchMeResponse } from '../../api/me';

import { LoadingPage } from '../Loading';
import { PreviousNavbar } from '../../components/previousNavbar';
import { InfoPiece } from '../../components/InfoPiece';

import Stack from 'react-bootstrap/Stack';
import Img from 'react-bootstrap/Image';


export function MePage() {
  const [meInfo, setMeInfo] = useState<MeResponse | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMeResponse();
      if (data) {
        setMeInfo(data);
      }
    };

    fetchData();
  }, []);

  if (!meInfo) {
    return <LoadingPage />;
  }

  return (
    <div className="col-md-8 mx-auto pt-5 pb-5 align-items-center">
      <PreviousNavbar />
      <Stack gap={5}>
        <Img src={meInfo.profile} />
        <InfoPiece content={meInfo.shortIntro} />
        <InfoPiece content={meInfo.workExperience} />
        <InfoPiece content={meInfo.education} />
        <InfoPiece content={meInfo.compSci} />
        <InfoPiece content={meInfo.hobbies} />
      </Stack>
    </div>
  );
}
