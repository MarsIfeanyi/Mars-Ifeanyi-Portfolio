import { Icon } from "@iconify/react";
import Image from "next/image";

const make = (slug: string) =>
  function BrandIcon({ className }: { className?: string }) {
    return <Icon icon={slug} className={className} />;
  };

// Frontend Development
export const ReactIcon = make("logos:react");
export const NextjsIcon = make("logos:nextjs-icon");
export const TypeScriptIcon = make("logos:typescript-icon");
export const TailwindIcon = make("logos:tailwindcss-icon");
export const JavaScriptIcon = make("logos:javascript");

// Backend
export const NodejsIcon = make("logos:nodejs-icon");
export const ExpressIcon = make("skill-icons:expressjs-dark");
export const MongoDBIcon = make("logos:mongodb-icon");
export const PostgreSQLIcon = make("logos:postgresql");
export const GraphQLIcon = make("logos:graphql");
export const RestApiIcon = make("mdi:api");

// Tools & Others
export const GitIcon = make("logos:git-icon");
export const DockerIcon = make("logos:docker-icon");
export const AWSIcon = make("logos:aws");
export const LinuxIcon = make("logos:linux-tux");
export const FigmaIcon = make("logos:figma");
export const CICDIcon = make("logos:github-actions"); // was "logos:github-actions-icon" — wrong

// Data Engineering

export const DatabricksIcon = make("logos:databricks-icon");
export const SnowflakeIcon = make("logos:snowflake-icon");
export const PythonIcon = make("logos:python");
export const PySparkIcon = make("logos:apache-spark"); // no local file needed
export const PowerBIIcon = make("logos:microsoft-power-bi");
export const DbtIcon = make("logos:dbt-icon");
export const AirflowIcon = make("logos:airflow-icon"); // was "logos:apache-airflow" — wrong, doesn't exist
export const ExcelIcon = make("vscode-icons:file-type-excel"); // was "logos:microsoft-excel" — wrong, doesn't exist

// Blockchain & Crypto
export const SolidityIcon = make("logos:solidity");
export const EthereumIcon = make("logos:ethereum");
export const EthersJsIcon = make("logos:ethers");
export const Web3JsIcon = make("logos:web3js");
export const EthersIcon = make("logos:ethers"); // ethers.js
export const HardhatIcon = make("logos:hardhat-icon");
export const RustIcon = make("logos:rust");
export const SolanaIcon = make("token:solana"); // also available as simple-icons:solana if you prefer that style

// SQL and PySpark have no official multi-color brand logo in Iconify's
// "logos" set — SQL because it's a language, not a company; PySpark
// because only the plain Apache Spark flame is indexed there.
export const SqlIcon = make("vscode-icons:file-type-sql"); // colored, generic SQL badge
