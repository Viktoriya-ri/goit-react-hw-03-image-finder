import { LineWave } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <LineWave
        height="100"
        width="100"
        color="darkgeen"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
    />
  );
};
