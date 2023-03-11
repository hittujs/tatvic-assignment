import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectLoggedInUser } from "../../dashboard/redux";

const AuthCheck = () => {
  const isLoggedIn = useSelector(selectLoggedInUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(`/`);
    }
  }, [isLoggedIn, navigate]);

  return <></>;
};

export default AuthCheck;
