import React from "react";
import TestPageItem from "../components/tests/TestsPageItem";
import { ETestStatuses } from "../enums/testStatuses.enum";

const TestsView = () => {
  const tests = [
    {
      id: 1,
      author: "Пупу И.Г.",
      count: 5,
      title: "Курсы по flutter",
      status: ETestStatuses.Done,
      img: "https://sportishka.com/uploads/posts/2022-04/1650580748_11-sportishka-com-p-machu-pikchu-peru-krasivo-foto-12.jpg",
      completed: true,
    },
    {
      id: 1,
      author: "Пупу И.Г.",
      count: 5,
      title: "Курсы по flutter",
      status: ETestStatuses.Active,
      img: "https://sportishka.com/uploads/posts/2022-04/1650580748_11-sportishka-com-p-machu-pikchu-peru-krasivo-foto-12.jpg",
      completed: false,
    },
    {
      id: 1,
      author: "Пупу И.Г.",
      count: 5,
      title: "Курсы по flutter",
      status: ETestStatuses.Done,
      img: "https://sportishka.com/uploads/posts/2022-04/1650580748_11-sportishka-com-p-machu-pikchu-peru-krasivo-foto-12.jpg",
      completed: false,
    },
  ];

  return (
    <div className={"tests-page container"}>
      {tests.map((test, key) => (
        <TestPageItem key={key} test={test} />
      ))}
    </div>
  );
};

export default TestsView;
