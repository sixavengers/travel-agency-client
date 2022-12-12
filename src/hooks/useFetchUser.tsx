import axios from "axios";
import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { server_url } from "../config/config";
type Props = {};

const useFetchUser = (props: Props) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { token } = useAppSelector((state) => state.authentication);
  const fetchUser = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${server_url}/users/current`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setUser(data?.user);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
    return () => {
      setUser(null);
    };
  });

  return { user, token, loading, setUser };
};

export default useFetchUser;
