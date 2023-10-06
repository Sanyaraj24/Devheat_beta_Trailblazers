This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.



Project:Investement Crisis
About Project:Our website "INVESTRONAUT" is a user-friendly website designed to empower individuals in their early 20s with valuable guidance for stock investments. Our platform provides a comprehensive database of company portfolios that can be easily accessed through a simple search. Upon searching for a specific company, users can access detailed information, including financial data, historical performance graphs. This information is presented in an easy-to-understand format, making it ideal for those new to stock investing.

Features of project:
1.)Company Portfolio Database:The project includes an extensive database of company portfolios, covering a wide range of publicly-traded companies. Users can search for specific companies by name or its symbol.
2.)Graphical Representation: The platform offers graphical representations of each company's historical stock performance. Users can view interactive charts and graphs that display stock prices, trends, and historical data over various timeframes.
3.)Key Financial Metrics:Users can access essential financial metrics for each company, such as open & close values.It also shows the 52 week open,close value and the percent change,volume.
4.)User-Friendly Interface: The project features an intuitive and user-friendly interface that makes it easy for individuals in their 20s or beginner to navigate and understand the stock data.
5.)Educational Resources:The platform provides educational content to help users understand the basics of stock investing.
6.)Portfolio Tracking: Users can see their virtual portfolios on the platform.

Technologies used:
HTML/CSS: For structuring and styling the web pages.
JavaScript: To add interactivity and dynamic features to the user interface.
Nextjs: Preffered next js to do the routing.
Charting Libraries:Chart.js for creating graphs.
Chakra UI,Material-UI,Tailblocks:Used for responsive design and UI components.
APIs:(There are some limitation in api such it provides real time data for selected company)
Used Autocomplete to make the search box and fetched the stock list of comapnies.
Used api fetching for showing graphs
Used API to fetch the real time stock values in the performance section.

Link of the youtube video for my project: https://youtu.be/lxi9PYLu6vQ?si=hxkqbuJW7hmJThyT


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
