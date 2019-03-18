# graphql-serverless

Sample project to guide the use of GraphQL and Serverless Architecture.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

First of all you need to clone this repository in your machine:

```bash
git clone git@github.com:muriloamendola/graphql-serverless.git
```

After that you need to run the setup commands:

```bash
npm run setup
```

Now you can run the project with:

```bash
npm start
```

### Prerequisites

This project have been developed using `Serverless Architecture` and to help us to deploy and operating the resources in to the Cloud we decided to use [Serverless Framework](https://serverless.com). For use of Serverless Framework we need to install `serverless cli` running the following command:

```bash
npm install -g serverless
```

> This project makes use of some DynamoDB tables and if you want to run this project locally its necessary to install dynamodb locally (In case you didn't run `npm run setup` command).

```bash
sls dynamodb install
```

#### Dataloader

We have implemented a sample of [dataloader](https://www.npmjs.com/package/dataloader) use ate user's company field.
You can see the loader code at [./src/graphql/loaders/companies-loader.js](./src/graphql/companies-loader.js).

## Authors

* **[Murilo Amêndola](https://twitter.com/muriloamendola)** - <muriloamendola@gmail.com>

See also the list of [contributors](https://github.com/muriloamendola/graphql-serverless/contributors) who participated in this project.

## License

MIT License © 2018
