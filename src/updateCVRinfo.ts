import getCVRData from './api/cvr/cvr-api.service';
import { getDKcompanies, saveCVRData } from './api/helios/helios-api.service';

const UpdateCVRinfo = async (): Promise<string> => {
  const companies = await getDKcompanies();

  // eslint-disable-next-line no-restricted-syntax
  for await (const company of companies) {
    // if (company.Companies_IDNo === '35674861') {
    // console.log('getting CVR data for: ', company.Companies_IDNo);
    const cvrData = await getCVRData(Number(company.Companies_IDNo));
    // console.log('Data is:', cvrData);
    console.log('saving in database for:', company.Companies_IDNo);
    const response = await saveCVRData(Number(company.Companies_IDNo), cvrData);
    // }
  }
  const result = ` done `;
  return result;
};

export default UpdateCVRinfo;
