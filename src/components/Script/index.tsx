import NextScript from "next/script";

const Script: React.FC = () => (
  <>
    <NextScript
      defer
      src={"https://static.cloudflareinsights.com/beacon.min.js"}
      data-cf-beacon={"{'token': 'c7fde3be8fc34cdab27358dacf7d648f'}"}
    />
  </>
);

export default Script;
