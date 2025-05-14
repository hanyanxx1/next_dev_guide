import { use } from "react";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    message: "Hello, Dashboard!",
  };
}
export default async function DashboardPage(props) {
  // const { message } = await getData();
  const { message } = use(getData());
  return <h1>{message}</h1>;
}
