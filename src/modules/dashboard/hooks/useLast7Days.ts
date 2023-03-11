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

  return {
    Last7Days,
  };
};

export default useLast7Days;
