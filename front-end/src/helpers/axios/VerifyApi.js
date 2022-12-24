import useAxiosPrivate from '~/hooks/useAxiosPrivate';

const VerifyApi = () => {
    const axiosPrivate = useAxiosPrivate();
 
  return axiosPrivate;
}

export default VerifyApi