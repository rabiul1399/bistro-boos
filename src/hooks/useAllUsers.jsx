import { useEffect, useState } from "react";

const useAllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data);
        setLoading(false);
      });
  }, []);
  return [allUsers, loading];
};

export default useAllUsers;
