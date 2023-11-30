/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CreateReportUser($email: String = \"\", $name: String = \"\", $photoUrl: String = \"\", $username: String = \"\") {\n  createReportUser(\n    data: {name: $name, username: $username, email: $email, photoUrl: $photoUrl}\n  ) {\n    id\n  }\n}": types.CreateReportUserDocument,
    "mutation CreateReport($blocksText: String = \"\", $forNextDayText: String = \"\", $forTodayText: String = \"\", $link: String = \"\", $userID: ID = \"\") {\n  createReport(\n    data: {forTodayText: $forTodayText, blocksText: $blocksText, forNextDayText: $forNextDayText, link: $link, reportUser: {connect: {id: $userID}}}\n  ) {\n    id\n  }\n}": types.CreateReportDocument,
    "mutation DeleteReport($id: ID = \"\") {\n  deleteReport(where: {id: $id}) {\n    id\n  }\n}": types.DeleteReportDocument,
    "mutation UpdateReport($blocksText: String = \"\", $forNextDayText: String = \"\", $forTodayText: String = \"\", $link: String = \"\", $reportID: ID = \"\") {\n  updateReport(\n    data: {blocksText: $blocksText, forNextDayText: $forNextDayText, forTodayText: $forTodayText, link: $link}\n    where: {id: $reportID}\n  ) {\n    id\n  }\n  publishReport(where: {id: $reportID}, to: PUBLISHED) {\n    id\n  }\n}": types.UpdateReportDocument,
    "query Reports {\n  reports {\n    id\n    forTodayText\n    forNextDayText\n    blocksText\n    reportUser {\n      id\n      name\n      photoUrl\n      username\n      email\n    }\n  }\n}": types.ReportsDocument,
    "query GetUserByEmail($email: String = \"\") {\n  reportUser(where: {email: $email}) {\n    id\n  }\n}": types.GetUserByEmailDocument,
    "query GetWhiteListUserByEmail($email: String = \"\") {\n  whiteList(where: {email: $email}) {\n    id\n  }\n}": types.GetWhiteListUserByEmailDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateReportUser($email: String = \"\", $name: String = \"\", $photoUrl: String = \"\", $username: String = \"\") {\n  createReportUser(\n    data: {name: $name, username: $username, email: $email, photoUrl: $photoUrl}\n  ) {\n    id\n  }\n}"): (typeof documents)["mutation CreateReportUser($email: String = \"\", $name: String = \"\", $photoUrl: String = \"\", $username: String = \"\") {\n  createReportUser(\n    data: {name: $name, username: $username, email: $email, photoUrl: $photoUrl}\n  ) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateReport($blocksText: String = \"\", $forNextDayText: String = \"\", $forTodayText: String = \"\", $link: String = \"\", $userID: ID = \"\") {\n  createReport(\n    data: {forTodayText: $forTodayText, blocksText: $blocksText, forNextDayText: $forNextDayText, link: $link, reportUser: {connect: {id: $userID}}}\n  ) {\n    id\n  }\n}"): (typeof documents)["mutation CreateReport($blocksText: String = \"\", $forNextDayText: String = \"\", $forTodayText: String = \"\", $link: String = \"\", $userID: ID = \"\") {\n  createReport(\n    data: {forTodayText: $forTodayText, blocksText: $blocksText, forNextDayText: $forNextDayText, link: $link, reportUser: {connect: {id: $userID}}}\n  ) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteReport($id: ID = \"\") {\n  deleteReport(where: {id: $id}) {\n    id\n  }\n}"): (typeof documents)["mutation DeleteReport($id: ID = \"\") {\n  deleteReport(where: {id: $id}) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateReport($blocksText: String = \"\", $forNextDayText: String = \"\", $forTodayText: String = \"\", $link: String = \"\", $reportID: ID = \"\") {\n  updateReport(\n    data: {blocksText: $blocksText, forNextDayText: $forNextDayText, forTodayText: $forTodayText, link: $link}\n    where: {id: $reportID}\n  ) {\n    id\n  }\n  publishReport(where: {id: $reportID}, to: PUBLISHED) {\n    id\n  }\n}"): (typeof documents)["mutation UpdateReport($blocksText: String = \"\", $forNextDayText: String = \"\", $forTodayText: String = \"\", $link: String = \"\", $reportID: ID = \"\") {\n  updateReport(\n    data: {blocksText: $blocksText, forNextDayText: $forNextDayText, forTodayText: $forTodayText, link: $link}\n    where: {id: $reportID}\n  ) {\n    id\n  }\n  publishReport(where: {id: $reportID}, to: PUBLISHED) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Reports {\n  reports {\n    id\n    forTodayText\n    forNextDayText\n    blocksText\n    reportUser {\n      id\n      name\n      photoUrl\n      username\n      email\n    }\n  }\n}"): (typeof documents)["query Reports {\n  reports {\n    id\n    forTodayText\n    forNextDayText\n    blocksText\n    reportUser {\n      id\n      name\n      photoUrl\n      username\n      email\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUserByEmail($email: String = \"\") {\n  reportUser(where: {email: $email}) {\n    id\n  }\n}"): (typeof documents)["query GetUserByEmail($email: String = \"\") {\n  reportUser(where: {email: $email}) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetWhiteListUserByEmail($email: String = \"\") {\n  whiteList(where: {email: $email}) {\n    id\n  }\n}"): (typeof documents)["query GetWhiteListUserByEmail($email: String = \"\") {\n  whiteList(where: {email: $email}) {\n    id\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;