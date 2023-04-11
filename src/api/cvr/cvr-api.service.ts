import apiCVR from './api-cvr.config';

const getCVRData = async (cvr: number): Promise<any> => {
  const queryURL: string = `/_search?q=Vrvirksomhed.cvrNummer:${cvr}`;
  const response = await apiCVR.get<any, any>({
    api: '/cvr-permanent',
    controller: 'virksomhed',
    url: queryURL,
    // validateStatus: () => true,
  });
  // console.log('response.value', response.data.hits);
  // const keys = Object.keys(response.data.hits.hits[0]._source.Vrvirksomhed);
  // console.log(keys);

  // TDO kald cvr api.
  return response.data;
  // return response.data.hits.hits[0]._source.Vrvirksomhed;
};

export default getCVRData;
