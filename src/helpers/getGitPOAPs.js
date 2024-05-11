import axios from 'axios';

const getGitPOAPsWithUsername = async (username) => {
  try {
    const poapsFromUsername = (
      await axios.get(`https://public-api.gitpoap.io/v1/github/user/${username}/gitpoaps`)
    )?.data;
    return poapsFromUsername;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getGitPOAPsWithAddress = async (address) => {
  try {
    const poapsFromAddress = (
      await axios.get(`https://public-api.gitpoap.io/v1/address/${address}/gitpoaps`)
    )?.data;
    return poapsFromAddress;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { getGitPOAPsWithUsername, getGitPOAPsWithAddress };
