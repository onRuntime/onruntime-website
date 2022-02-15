import NextScript from "next/script";

const Script: React.FC = () => (
  <>
    <NextScript
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"token": "c7fde3be8fc34cdab27358dacf7d648f"}'
    />
    <NextScript
      data-ad-client="ca-pub-5128798341927637"
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    />
  </>
);

export default Script;
