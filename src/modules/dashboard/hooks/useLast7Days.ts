const useLast7Days = () => {
  const formatDate = (date: any) => {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();

    date = yyyy + "," + mm + "," + dd;
    return date;
  };

  const Last7Days = () => {
    let result = [];
    for (let i = 0; i < 7; i++) {
      let d = new Date();
      d.setDate(d.getDate() - i);
      result.push(formatDate(d));
    }

    return result;
  };

  const dateRange = {
    0: Date.now() - 7 * 86400000,
    1: Date.now() - 6 * 86400000,
    2: Date.now() - 5 * 86400000,
    3: Date.now() - 4 * 86400000,
    4: Date.now() - 3 * 86400000,
    5: Date.now() - 2 * 86400000,
    6: Date.now() - 1 * 86400000,
  };

  return {
    Last7Days,
    dateRange,
  };
};

export default useLast7Days;
