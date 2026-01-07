import { useState, useCallback } from "react";
import { STATUS } from "../constants/status";

export const useAsync = (asyncFn) => {
  const [status, setStatus] = useState(STATUS.LOADING);
  const [data, setData] = useState(null);

  const run = useCallback(() => {
    setStatus(STATUS.LOADING);

    asyncFn()
      .then((res) => {
        setData(res);
        setStatus(STATUS.SUCCESS);
      })
      .catch(() => setStatus(STATUS.FAILED));
  }, [asyncFn]);

  return { data, status, run };
};
