const key = '!@M*;-kATy_vcUkLq/U))QD`XL5Sg`5D';
const liClientId = '81td97f0ibm93v';
const liState = 'DCEeFWf45A53sdfKef424';
const liRedirectUri = 'https://www.example.com/auth/linkedin';

const api = {
  LoginUrl: `https://faazureapiinterfacedev.azurewebsites.net/api/fnMoblieLogin?code=${key}`,
  LinkedUrl: `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${liClientId}&redirect_uri=${liRedirectUri}&state=${liState}&scope=r_basicprofile`,
  AuthId: 'JS#236734',
  signUpURL: 'https://prod-36.westeurope.logic.azure.com:443/workflows/6c7084b18aa14457a7d1645153ced3e7/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=TmLOvpwMBYjrnKmhdDzc-EY2gIgPIxSvGsTGbk66rgM',
};

export default api;
