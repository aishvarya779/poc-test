import "./style.css";

  const acctData = [
    {
      acctNum: "AAA - 1234",
      user: "Alice"
    },
    {
      acctNum: "AAA - 5231",
      user: "Bob"
    },
    {
      acctNum: "AAA - 9921",
      user: "Alice"
    },
    {
      acctNum: "AAA - 8191",
      user: "Alice"
    }
  ];
  const balance = {
    "AAA - 1234": 4593.22,
    "AAA - 9921": 0,
    "AAA - 5231": 232142.5,
    "AAA - 8191": 4344
  };

  // merge balance with account Data
  for (let key in balance) {
    // if (balance.hasOwnProperty(key)) {
    let index = acctData.findIndex(item => item.acctNum === key);
    if (index > -1) {
      acctData[index].balance = balance[key];
    }
  }

  const filterAccountNumber = (
    user = "",
    sortBy = "acctNum",
    sortDirection = "asc"
  ) => {
    let filterData = [];

    user
      ? (filterData = acctData.filter(item => item.user === user))
      : (filterData = acctData);

    filterData.sort((a, b) => {
      const a1 = a[sortBy];
      const b1 = b[sortBy];

      if (a1 !== b1) {
        return a1 > b1
          ? sortDirection === "desc"
            ? -1
            : 1
          : sortDirection === "desc"
          ? 1
          : -1;
      } else {
        return 0;
      }
    });
    return filterData.map(item => item.acctNum);
  };

  console.log("a) bobFilter: ", filterAccountNumber("Bob"));
  console.log("b) CharlieFilter: ", filterAccountNumber("Charlie"));
  console.log("c) acctNumFilter: ", filterAccountNumber("", "acctNum"));
  console.log("d)  filtered by Alice",filterAccountNumber('Alice','balance','asc'))