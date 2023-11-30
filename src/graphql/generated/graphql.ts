/* eslint-disable */
import * as Apollo from '@apollo/client'
import { gql } from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: { input: any; output: any }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any }
  Hex: { input: any; output: any }
  /** Raw JSON value */
  Json: { input: any; output: any }
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any }
  RGBAHue: { input: any; output: any }
  RGBATransparency: { input: any; output: any }
  /** Slate-compatible RichText AST */
  RichTextAST: { input: any; output: any }
}

export type Aggregate = {
  __typename?: 'Aggregate'
  count: Scalars['Int']['output']
}

/** Asset system model */
export type Asset = Entity &
  Node & {
    __typename?: 'Asset'
    /** The time the document was created */
    createdAt: Scalars['DateTime']['output']
    /** User that created this document */
    createdBy?: Maybe<User>
    /** Get the document in other stages */
    documentInStages: Array<Asset>
    /** The file name */
    fileName: Scalars['String']['output']
    /** The file handle */
    handle: Scalars['String']['output']
    /** The height of the file */
    height?: Maybe<Scalars['Float']['output']>
    /** List of Asset versions */
    history: Array<Version>
    /** The unique identifier */
    id: Scalars['ID']['output']
    /** System Locale field */
    locale: Locale
    /** Get the other localizations for this document */
    localizations: Array<Asset>
    /** The mime type of the file */
    mimeType?: Maybe<Scalars['String']['output']>
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']['output']>
    /** User that last published this document */
    publishedBy?: Maybe<User>
    scheduledIn: Array<ScheduledOperation>
    /** The file size */
    size?: Maybe<Scalars['Float']['output']>
    /** System stage field */
    stage: Stage
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']['output']
    /** User that last updated this document */
    updatedBy?: Maybe<User>
    /** Get the url for the asset with provided transformations applied. */
    url: Scalars['String']['output']
    /** The file width */
    width?: Maybe<Scalars['Float']['output']>
  }

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input']
  skip?: Scalars['Int']['input']
  stageOverride?: InputMaybe<Stage>
}

/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  locales?: Array<Locale>
}

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>
}

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: AssetWhereUniqueInput
}

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<AssetEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  fileName: Scalars['String']['input']
  handle: Scalars['String']['input']
  height?: InputMaybe<Scalars['Float']['input']>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>
  mimeType?: InputMaybe<Scalars['String']['input']>
  size?: InputMaybe<Scalars['Float']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  width?: InputMaybe<Scalars['Float']['input']>
}

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  fileName: Scalars['String']['input']
  handle: Scalars['String']['input']
  height?: InputMaybe<Scalars['Float']['input']>
  mimeType?: InputMaybe<Scalars['String']['input']>
  size?: InputMaybe<Scalars['Float']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  width?: InputMaybe<Scalars['Float']['input']>
}

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput
  locale: Locale
}

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>
}

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>
}

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>
}

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Asset
}

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<AssetWhereStageInput>
  documentInStages_none?: InputMaybe<AssetWhereStageInput>
  documentInStages_some?: InputMaybe<AssetWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>
  image?: InputMaybe<ImageTransformationInput>
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>
}

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']['input']>
  handle?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Float']['input']>
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>
  mimeType?: InputMaybe<Scalars['String']['input']>
  size?: InputMaybe<Scalars['Float']['input']>
  width?: InputMaybe<Scalars['Float']['input']>
}

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>
  handle?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Float']['input']>
  mimeType?: InputMaybe<Scalars['String']['input']>
  size?: InputMaybe<Scalars['Float']['input']>
  width?: InputMaybe<Scalars['Float']['input']>
}

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput
  locale: Locale
}

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>
}

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>
}

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Float']['input']>
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>
  mimeType?: InputMaybe<Scalars['String']['input']>
  size?: InputMaybe<Scalars['Float']['input']>
  width?: InputMaybe<Scalars['Float']['input']>
}

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Float']['input']>
  mimeType?: InputMaybe<Scalars['String']['input']>
  size?: InputMaybe<Scalars['Float']['input']>
  width?: InputMaybe<Scalars['Float']['input']>
}

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput
  locale: Locale
}

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>
}

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput
  /** Document search */
  where: AssetWhereInput
}

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>
}

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput
  /** Update document if it exists */
  update: AssetUpdateInput
}

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput
  locale: Locale
  update: AssetUpdateLocalizationDataInput
}

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<AssetWhereStageInput>
  documentInStages_none?: InputMaybe<AssetWhereStageInput>
  documentInStages_some?: InputMaybe<AssetWhereStageInput>
  fileName?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>
  handle?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  mimeType?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  size?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  width?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type BatchPayload = {
  __typename?: 'BatchPayload'
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output']
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color'
  css: Scalars['String']['output']
  hex: Scalars['Hex']['output']
  rgba: Rgba
}

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>
  rgba?: InputMaybe<RgbaInput>
}

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>
}

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx',
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>
}

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>
}

export type DocumentVersion = {
  __typename?: 'DocumentVersion'
  createdAt: Scalars['DateTime']['output']
  data?: Maybe<Scalars['Json']['output']>
  id: Scalars['ID']['output']
  revision: Scalars['Int']['output']
  stage: Stage
}

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID']['output']
  /** The Stage of an object */
  stage: Stage
}

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
  /** Asset system model */
  Asset = 'Asset',
  Report = 'Report',
  ReportUser = 'ReportUser',
  /** Scheduled Operation system model */
  ScheduledOperation = 'ScheduledOperation',
  /** Scheduled Release system model */
  ScheduledRelease = 'ScheduledRelease',
  /** User system model */
  User = 'User',
  WhiteList = 'WhiteList',
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID']['input']
  stage: Stage
  /** The Type name of an object */
  typename: EntityTypeName
}

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>
}

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>
}

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location'
  distance: Scalars['Float']['output']
  latitude: Scalars['Float']['output']
  longitude: Scalars['Float']['output']
}

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput
}

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input']
  longitude: Scalars['Float']['input']
}

export type Mutation = {
  __typename?: 'Mutation'
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>
  /** Create one report */
  createReport?: Maybe<Report>
  /** Create one reportUser */
  createReportUser?: Maybe<ReportUser>
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>
  /** Create one whiteList */
  createWhiteList?: Maybe<WhiteList>
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection
  /**
   * Delete many ReportUser documents
   * @deprecated Please use the new paginated many mutation (deleteManyReportUsersConnection)
   */
  deleteManyReportUsers: BatchPayload
  /** Delete many ReportUser documents, return deleted documents */
  deleteManyReportUsersConnection: ReportUserConnection
  /**
   * Delete many Report documents
   * @deprecated Please use the new paginated many mutation (deleteManyReportsConnection)
   */
  deleteManyReports: BatchPayload
  /** Delete many Report documents, return deleted documents */
  deleteManyReportsConnection: ReportConnection
  /**
   * Delete many WhiteList documents
   * @deprecated Please use the new paginated many mutation (deleteManyWhiteListsConnection)
   */
  deleteManyWhiteLists: BatchPayload
  /** Delete many WhiteList documents, return deleted documents */
  deleteManyWhiteListsConnection: WhiteListConnection
  /** Delete one report from _all_ existing stages. Returns deleted document. */
  deleteReport?: Maybe<Report>
  /** Delete one reportUser from _all_ existing stages. Returns deleted document. */
  deleteReportUser?: Maybe<ReportUser>
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>
  /** Delete one whiteList from _all_ existing stages. Returns deleted document. */
  deleteWhiteList?: Maybe<WhiteList>
  /** Publish one asset */
  publishAsset?: Maybe<Asset>
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection
  /**
   * Publish many ReportUser documents
   * @deprecated Please use the new paginated many mutation (publishManyReportUsersConnection)
   */
  publishManyReportUsers: BatchPayload
  /** Publish many ReportUser documents */
  publishManyReportUsersConnection: ReportUserConnection
  /**
   * Publish many Report documents
   * @deprecated Please use the new paginated many mutation (publishManyReportsConnection)
   */
  publishManyReports: BatchPayload
  /** Publish many Report documents */
  publishManyReportsConnection: ReportConnection
  /**
   * Publish many WhiteList documents
   * @deprecated Please use the new paginated many mutation (publishManyWhiteListsConnection)
   */
  publishManyWhiteLists: BatchPayload
  /** Publish many WhiteList documents */
  publishManyWhiteListsConnection: WhiteListConnection
  /** Publish one report */
  publishReport?: Maybe<Report>
  /** Publish one reportUser */
  publishReportUser?: Maybe<ReportUser>
  /** Publish one whiteList */
  publishWhiteList?: Maybe<WhiteList>
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>
  /** Schedule to publish one report */
  schedulePublishReport?: Maybe<Report>
  /** Schedule to publish one reportUser */
  schedulePublishReportUser?: Maybe<ReportUser>
  /** Schedule to publish one whiteList */
  schedulePublishWhiteList?: Maybe<WhiteList>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>
  /** Unpublish one report from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishReport?: Maybe<Report>
  /** Unpublish one reportUser from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishReportUser?: Maybe<ReportUser>
  /** Unpublish one whiteList from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishWhiteList?: Maybe<WhiteList>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection
  /**
   * Unpublish many ReportUser documents
   * @deprecated Please use the new paginated many mutation (unpublishManyReportUsersConnection)
   */
  unpublishManyReportUsers: BatchPayload
  /** Find many ReportUser documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyReportUsersConnection: ReportUserConnection
  /**
   * Unpublish many Report documents
   * @deprecated Please use the new paginated many mutation (unpublishManyReportsConnection)
   */
  unpublishManyReports: BatchPayload
  /** Find many Report documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyReportsConnection: ReportConnection
  /**
   * Unpublish many WhiteList documents
   * @deprecated Please use the new paginated many mutation (unpublishManyWhiteListsConnection)
   */
  unpublishManyWhiteLists: BatchPayload
  /** Find many WhiteList documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyWhiteListsConnection: WhiteListConnection
  /** Unpublish one report from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishReport?: Maybe<Report>
  /** Unpublish one reportUser from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishReportUser?: Maybe<ReportUser>
  /** Unpublish one whiteList from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishWhiteList?: Maybe<WhiteList>
  /** Update one asset */
  updateAsset?: Maybe<Asset>
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection
  /**
   * Update many reportUsers
   * @deprecated Please use the new paginated many mutation (updateManyReportUsersConnection)
   */
  updateManyReportUsers: BatchPayload
  /** Update many ReportUser documents */
  updateManyReportUsersConnection: ReportUserConnection
  /**
   * Update many reports
   * @deprecated Please use the new paginated many mutation (updateManyReportsConnection)
   */
  updateManyReports: BatchPayload
  /** Update many Report documents */
  updateManyReportsConnection: ReportConnection
  /**
   * Update many whiteLists
   * @deprecated Please use the new paginated many mutation (updateManyWhiteListsConnection)
   */
  updateManyWhiteLists: BatchPayload
  /** Update many WhiteList documents */
  updateManyWhiteListsConnection: WhiteListConnection
  /** Update one report */
  updateReport?: Maybe<Report>
  /** Update one reportUser */
  updateReportUser?: Maybe<ReportUser>
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>
  /** Update one whiteList */
  updateWhiteList?: Maybe<WhiteList>
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>
  /** Upsert one report */
  upsertReport?: Maybe<Report>
  /** Upsert one reportUser */
  upsertReportUser?: Maybe<ReportUser>
  /** Upsert one whiteList */
  upsertWhiteList?: Maybe<WhiteList>
}

export type MutationCreateAssetArgs = {
  data: AssetCreateInput
}

export type MutationCreateReportArgs = {
  data: ReportCreateInput
}

export type MutationCreateReportUserArgs = {
  data: ReportUserCreateInput
}

export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput
}

export type MutationCreateWhiteListArgs = {
  data: WhiteListCreateInput
}

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput
}

export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyReportUsersArgs = {
  where?: InputMaybe<ReportUserManyWhereInput>
}

export type MutationDeleteManyReportUsersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ReportUserManyWhereInput>
}

export type MutationDeleteManyReportsArgs = {
  where?: InputMaybe<ReportManyWhereInput>
}

export type MutationDeleteManyReportsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ReportManyWhereInput>
}

export type MutationDeleteManyWhiteListsArgs = {
  where?: InputMaybe<WhiteListManyWhereInput>
}

export type MutationDeleteManyWhiteListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<WhiteListManyWhereInput>
}

export type MutationDeleteReportArgs = {
  where: ReportWhereUniqueInput
}

export type MutationDeleteReportUserArgs = {
  where: ReportUserWhereUniqueInput
}

export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput
}

export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput
}

export type MutationDeleteWhiteListArgs = {
  where: WhiteListWhereUniqueInput
}

export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']['input']>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']['input']>
  to?: Array<Stage>
  where?: InputMaybe<AssetManyWhereInput>
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  to?: Array<Stage>
  where?: InputMaybe<AssetManyWhereInput>
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationPublishManyReportUsersArgs = {
  to?: Array<Stage>
  where?: InputMaybe<ReportUserManyWhereInput>
}

export type MutationPublishManyReportUsersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  to?: Array<Stage>
  where?: InputMaybe<ReportUserManyWhereInput>
}

export type MutationPublishManyReportsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<ReportManyWhereInput>
}

export type MutationPublishManyReportsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  to?: Array<Stage>
  where?: InputMaybe<ReportManyWhereInput>
}

export type MutationPublishManyWhiteListsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<WhiteListManyWhereInput>
}

export type MutationPublishManyWhiteListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  to?: Array<Stage>
  where?: InputMaybe<WhiteListManyWhereInput>
}

export type MutationPublishReportArgs = {
  to?: Array<Stage>
  where: ReportWhereUniqueInput
}

export type MutationPublishReportUserArgs = {
  to?: Array<Stage>
  where: ReportUserWhereUniqueInput
}

export type MutationPublishWhiteListArgs = {
  to?: Array<Stage>
  where: WhiteListWhereUniqueInput
}

export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']['input']>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationSchedulePublishReportArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  to?: Array<Stage>
  where: ReportWhereUniqueInput
}

export type MutationSchedulePublishReportUserArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  to?: Array<Stage>
  where: ReportUserWhereUniqueInput
}

export type MutationSchedulePublishWhiteListArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  to?: Array<Stage>
  where: WhiteListWhereUniqueInput
}

export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>
  where: AssetWhereUniqueInput
}

export type MutationScheduleUnpublishReportArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  where: ReportWhereUniqueInput
}

export type MutationScheduleUnpublishReportUserArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  where: ReportUserWhereUniqueInput
}

export type MutationScheduleUnpublishWhiteListArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  where: WhiteListWhereUniqueInput
}

export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>
  where: AssetWhereUniqueInput
}

export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: InputMaybe<Stage>
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyReportUsersArgs = {
  from?: Array<Stage>
  where?: InputMaybe<ReportUserManyWhereInput>
}

export type MutationUnpublishManyReportUsersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<ReportUserManyWhereInput>
}

export type MutationUnpublishManyReportsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<ReportManyWhereInput>
}

export type MutationUnpublishManyReportsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<ReportManyWhereInput>
}

export type MutationUnpublishManyWhiteListsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<WhiteListManyWhereInput>
}

export type MutationUnpublishManyWhiteListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<WhiteListManyWhereInput>
}

export type MutationUnpublishReportArgs = {
  from?: Array<Stage>
  where: ReportWhereUniqueInput
}

export type MutationUnpublishReportUserArgs = {
  from?: Array<Stage>
  where: ReportUserWhereUniqueInput
}

export type MutationUnpublishWhiteListArgs = {
  from?: Array<Stage>
  where: WhiteListWhereUniqueInput
}

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput
  where: AssetWhereUniqueInput
}

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  data: AssetUpdateManyInput
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyReportUsersArgs = {
  data: ReportUserUpdateManyInput
  where?: InputMaybe<ReportUserManyWhereInput>
}

export type MutationUpdateManyReportUsersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  data: ReportUserUpdateManyInput
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ReportUserManyWhereInput>
}

export type MutationUpdateManyReportsArgs = {
  data: ReportUpdateManyInput
  where?: InputMaybe<ReportManyWhereInput>
}

export type MutationUpdateManyReportsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  data: ReportUpdateManyInput
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ReportManyWhereInput>
}

export type MutationUpdateManyWhiteListsArgs = {
  data: WhiteListUpdateManyInput
  where?: InputMaybe<WhiteListManyWhereInput>
}

export type MutationUpdateManyWhiteListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  data: WhiteListUpdateManyInput
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<WhiteListManyWhereInput>
}

export type MutationUpdateReportArgs = {
  data: ReportUpdateInput
  where: ReportWhereUniqueInput
}

export type MutationUpdateReportUserArgs = {
  data: ReportUserUpdateInput
  where: ReportUserWhereUniqueInput
}

export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput
  where: ScheduledReleaseWhereUniqueInput
}

export type MutationUpdateWhiteListArgs = {
  data: WhiteListUpdateInput
  where: WhiteListWhereUniqueInput
}

export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput
  where: AssetWhereUniqueInput
}

export type MutationUpsertReportArgs = {
  upsert: ReportUpsertInput
  where: ReportWhereUniqueInput
}

export type MutationUpsertReportUserArgs = {
  upsert: ReportUserUpsertInput
  where: ReportUserWhereUniqueInput
}

export type MutationUpsertWhiteListArgs = {
  upsert: WhiteListUpsertInput
  where: WhiteListWhereUniqueInput
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output']
  /** The Stage of an object */
  stage: Stage
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale
  /** Stages to publish selected locales to */
  stages: Array<Stage>
}

export type Query = {
  __typename?: 'Query'
  /** Retrieve a single asset */
  asset?: Maybe<Asset>
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple assets */
  assets: Array<Asset>
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>
  /** Fetches an object given its ID */
  node?: Maybe<Node>
  /** Retrieve a single report */
  report?: Maybe<Report>
  /** Retrieve a single reportUser */
  reportUser?: Maybe<ReportUser>
  /** Retrieve document version */
  reportUserVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple reportUsers */
  reportUsers: Array<ReportUser>
  /** Retrieve multiple reportUsers using the Relay connection interface */
  reportUsersConnection: ReportUserConnection
  /** Retrieve document version */
  reportVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple reports */
  reports: Array<Report>
  /** Retrieve multiple reports using the Relay connection interface */
  reportsConnection: ReportConnection
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection
  /** Retrieve a single user */
  user?: Maybe<User>
  /** Retrieve multiple users */
  users: Array<User>
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection
  /** Retrieve a single whiteList */
  whiteList?: Maybe<WhiteList>
  /** Retrieve document version */
  whiteListVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple whiteLists */
  whiteLists: Array<WhiteList>
  /** Retrieve multiple whiteLists using the Relay connection interface */
  whiteListsConnection: WhiteListConnection
}

export type QueryAssetArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: AssetWhereUniqueInput
}

export type QueryAssetVersionArgs = {
  where: VersionWhereInput
}

export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<AssetWhereInput>
}

export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<AssetWhereInput>
}

export type QueryEntitiesArgs = {
  where: Array<EntityWhereInput>
}

export type QueryNodeArgs = {
  id: Scalars['ID']['input']
  locales?: Array<Locale>
  stage?: Stage
}

export type QueryReportArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ReportWhereUniqueInput
}

export type QueryReportUserArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ReportUserWhereUniqueInput
}

export type QueryReportUserVersionArgs = {
  where: VersionWhereInput
}

export type QueryReportUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ReportUserOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ReportUserWhereInput>
}

export type QueryReportUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ReportUserOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ReportUserWhereInput>
}

export type QueryReportVersionArgs = {
  where: VersionWhereInput
}

export type QueryReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ReportOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ReportWhereInput>
}

export type QueryReportsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ReportOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ReportWhereInput>
}

export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ScheduledOperationWhereUniqueInput
}

export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ScheduledReleaseWhereUniqueInput
}

export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ScheduledReleaseWhereInput>
}

export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ScheduledReleaseWhereInput>
}

export type QueryUserArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<UserOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<UserWhereInput>
}

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<UserOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<UserWhereInput>
}

export type QueryWhiteListArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: WhiteListWhereUniqueInput
}

export type QueryWhiteListVersionArgs = {
  where: VersionWhereInput
}

export type QueryWhiteListsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<WhiteListOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<WhiteListWhereInput>
}

export type QueryWhiteListsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<WhiteListOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<WhiteListWhereInput>
}

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA'
  a: Scalars['RGBATransparency']['output']
  b: Scalars['RGBAHue']['output']
  g: Scalars['RGBAHue']['output']
  r: Scalars['RGBAHue']['output']
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input']
  b: Scalars['RGBAHue']['input']
  g: Scalars['RGBAHue']['input']
  r: Scalars['RGBAHue']['input']
}

export type Report = Entity &
  Node & {
    __typename?: 'Report'
    blocksText?: Maybe<Scalars['String']['output']>
    /** The time the document was created */
    createdAt: Scalars['DateTime']['output']
    /** User that created this document */
    createdBy?: Maybe<User>
    /** Get the document in other stages */
    documentInStages: Array<Report>
    forNextDayText: Scalars['String']['output']
    forTodayText: Scalars['String']['output']
    /** List of Report versions */
    history: Array<Version>
    /** The unique identifier */
    id: Scalars['ID']['output']
    link: Scalars['String']['output']
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']['output']>
    /** User that last published this document */
    publishedBy?: Maybe<User>
    reportUser?: Maybe<ReportUser>
    scheduledIn: Array<ScheduledOperation>
    /** System stage field */
    stage: Stage
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']['output']
    /** User that last updated this document */
    updatedBy?: Maybe<User>
  }

export type ReportCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ReportDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

export type ReportHistoryArgs = {
  limit?: Scalars['Int']['input']
  skip?: Scalars['Int']['input']
  stageOverride?: InputMaybe<Stage>
}

export type ReportPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ReportReportUserArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ReportScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type ReportUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ReportConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ReportWhereUniqueInput
}

/** A connection to a list of items. */
export type ReportConnection = {
  __typename?: 'ReportConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ReportEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ReportCreateInput = {
  blocksText?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  forNextDayText: Scalars['String']['input']
  forTodayText: Scalars['String']['input']
  link: Scalars['String']['input']
  reportUser?: InputMaybe<ReportUserCreateOneInlineInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ReportCreateManyInlineInput = {
  /** Connect multiple existing Report documents */
  connect?: InputMaybe<Array<ReportWhereUniqueInput>>
  /** Create and connect multiple existing Report documents */
  create?: InputMaybe<Array<ReportCreateInput>>
}

export type ReportCreateOneInlineInput = {
  /** Connect one existing Report document */
  connect?: InputMaybe<ReportWhereUniqueInput>
  /** Create and connect one Report document */
  create?: InputMaybe<ReportCreateInput>
}

/** An edge in a connection. */
export type ReportEdge = {
  __typename?: 'ReportEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Report
}

/** Identifies documents */
export type ReportManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReportWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReportWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReportWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  blocksText?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  blocksText_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  blocksText_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  blocksText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  blocksText_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  blocksText_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  blocksText_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  blocksText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  blocksText_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  blocksText_starts_with?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<ReportWhereStageInput>
  documentInStages_none?: InputMaybe<ReportWhereStageInput>
  documentInStages_some?: InputMaybe<ReportWhereStageInput>
  forNextDayText?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  forNextDayText_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  forNextDayText_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  forNextDayText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  forNextDayText_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  forNextDayText_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  forNextDayText_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  forNextDayText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  forNextDayText_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  forNextDayText_starts_with?: InputMaybe<Scalars['String']['input']>
  forTodayText?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  forTodayText_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  forTodayText_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  forTodayText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  forTodayText_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  forTodayText_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  forTodayText_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  forTodayText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  forTodayText_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  forTodayText_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  link?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  reportUser?: InputMaybe<ReportUserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ReportOrderByInput {
  BlocksTextAsc = 'blocksText_ASC',
  BlocksTextDesc = 'blocksText_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  ForNextDayTextAsc = 'forNextDayText_ASC',
  ForNextDayTextDesc = 'forNextDayText_DESC',
  ForTodayTextAsc = 'forTodayText_ASC',
  ForTodayTextDesc = 'forTodayText_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ReportUpdateInput = {
  blocksText?: InputMaybe<Scalars['String']['input']>
  forNextDayText?: InputMaybe<Scalars['String']['input']>
  forTodayText?: InputMaybe<Scalars['String']['input']>
  link?: InputMaybe<Scalars['String']['input']>
  reportUser?: InputMaybe<ReportUserUpdateOneInlineInput>
}

export type ReportUpdateManyInlineInput = {
  /** Connect multiple existing Report documents */
  connect?: InputMaybe<Array<ReportConnectInput>>
  /** Create and connect multiple Report documents */
  create?: InputMaybe<Array<ReportCreateInput>>
  /** Delete multiple Report documents */
  delete?: InputMaybe<Array<ReportWhereUniqueInput>>
  /** Disconnect multiple Report documents */
  disconnect?: InputMaybe<Array<ReportWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Report documents */
  set?: InputMaybe<Array<ReportWhereUniqueInput>>
  /** Update multiple Report documents */
  update?: InputMaybe<Array<ReportUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Report documents */
  upsert?: InputMaybe<Array<ReportUpsertWithNestedWhereUniqueInput>>
}

export type ReportUpdateManyInput = {
  blocksText?: InputMaybe<Scalars['String']['input']>
  forNextDayText?: InputMaybe<Scalars['String']['input']>
  forTodayText?: InputMaybe<Scalars['String']['input']>
  link?: InputMaybe<Scalars['String']['input']>
}

export type ReportUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ReportUpdateManyInput
  /** Document search */
  where: ReportWhereInput
}

export type ReportUpdateOneInlineInput = {
  /** Connect existing Report document */
  connect?: InputMaybe<ReportWhereUniqueInput>
  /** Create and connect one Report document */
  create?: InputMaybe<ReportCreateInput>
  /** Delete currently connected Report document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected Report document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Report document */
  update?: InputMaybe<ReportUpdateWithNestedWhereUniqueInput>
  /** Upsert single Report document */
  upsert?: InputMaybe<ReportUpsertWithNestedWhereUniqueInput>
}

export type ReportUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ReportUpdateInput
  /** Unique document search */
  where: ReportWhereUniqueInput
}

export type ReportUpsertInput = {
  /** Create document if it didn't exist */
  create: ReportCreateInput
  /** Update document if it exists */
  update: ReportUpdateInput
}

export type ReportUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ReportUpsertInput
  /** Unique document search */
  where: ReportWhereUniqueInput
}

export type ReportUser = Entity &
  Node & {
    __typename?: 'ReportUser'
    /** The time the document was created */
    createdAt: Scalars['DateTime']['output']
    /** User that created this document */
    createdBy?: Maybe<User>
    /** Get the document in other stages */
    documentInStages: Array<ReportUser>
    email: Scalars['String']['output']
    /** List of ReportUser versions */
    history: Array<Version>
    /** The unique identifier */
    id: Scalars['ID']['output']
    name: Scalars['String']['output']
    photoUrl?: Maybe<Scalars['String']['output']>
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']['output']>
    /** User that last published this document */
    publishedBy?: Maybe<User>
    reports: Array<Report>
    scheduledIn: Array<ScheduledOperation>
    /** System stage field */
    stage: Stage
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']['output']
    /** User that last updated this document */
    updatedBy?: Maybe<User>
    username: Scalars['String']['output']
  }

export type ReportUserCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ReportUserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

export type ReportUserHistoryArgs = {
  limit?: Scalars['Int']['input']
  skip?: Scalars['Int']['input']
  stageOverride?: InputMaybe<Stage>
}

export type ReportUserPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ReportUserReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<ReportOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ReportWhereInput>
}

export type ReportUserScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type ReportUserUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ReportUserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ReportUserWhereUniqueInput
}

/** A connection to a list of items. */
export type ReportUserConnection = {
  __typename?: 'ReportUserConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ReportUserEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ReportUserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  email: Scalars['String']['input']
  name: Scalars['String']['input']
  photoUrl?: InputMaybe<Scalars['String']['input']>
  reports?: InputMaybe<ReportCreateManyInlineInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  username: Scalars['String']['input']
}

export type ReportUserCreateManyInlineInput = {
  /** Connect multiple existing ReportUser documents */
  connect?: InputMaybe<Array<ReportUserWhereUniqueInput>>
  /** Create and connect multiple existing ReportUser documents */
  create?: InputMaybe<Array<ReportUserCreateInput>>
}

export type ReportUserCreateOneInlineInput = {
  /** Connect one existing ReportUser document */
  connect?: InputMaybe<ReportUserWhereUniqueInput>
  /** Create and connect one ReportUser document */
  create?: InputMaybe<ReportUserCreateInput>
}

/** An edge in a connection. */
export type ReportUserEdge = {
  __typename?: 'ReportUserEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: ReportUser
}

/** Identifies documents */
export type ReportUserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReportUserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReportUserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReportUserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<ReportUserWhereStageInput>
  documentInStages_none?: InputMaybe<ReportUserWhereStageInput>
  documentInStages_some?: InputMaybe<ReportUserWhereStageInput>
  email?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  photoUrl?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  photoUrl_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  photoUrl_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  photoUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  photoUrl_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  photoUrl_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  photoUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  photoUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  photoUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  photoUrl_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  reports_every?: InputMaybe<ReportWhereInput>
  reports_none?: InputMaybe<ReportWhereInput>
  reports_some?: InputMaybe<ReportWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  username?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  username_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  username_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  username_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  username_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  username_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  username_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  username_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  username_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  username_starts_with?: InputMaybe<Scalars['String']['input']>
}

export enum ReportUserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhotoUrlAsc = 'photoUrl_ASC',
  PhotoUrlDesc = 'photoUrl_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UsernameAsc = 'username_ASC',
  UsernameDesc = 'username_DESC',
}

export type ReportUserUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  photoUrl?: InputMaybe<Scalars['String']['input']>
  reports?: InputMaybe<ReportUpdateManyInlineInput>
  username?: InputMaybe<Scalars['String']['input']>
}

export type ReportUserUpdateManyInlineInput = {
  /** Connect multiple existing ReportUser documents */
  connect?: InputMaybe<Array<ReportUserConnectInput>>
  /** Create and connect multiple ReportUser documents */
  create?: InputMaybe<Array<ReportUserCreateInput>>
  /** Delete multiple ReportUser documents */
  delete?: InputMaybe<Array<ReportUserWhereUniqueInput>>
  /** Disconnect multiple ReportUser documents */
  disconnect?: InputMaybe<Array<ReportUserWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ReportUser documents */
  set?: InputMaybe<Array<ReportUserWhereUniqueInput>>
  /** Update multiple ReportUser documents */
  update?: InputMaybe<Array<ReportUserUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple ReportUser documents */
  upsert?: InputMaybe<Array<ReportUserUpsertWithNestedWhereUniqueInput>>
}

export type ReportUserUpdateManyInput = {
  name?: InputMaybe<Scalars['String']['input']>
  photoUrl?: InputMaybe<Scalars['String']['input']>
}

export type ReportUserUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ReportUserUpdateManyInput
  /** Document search */
  where: ReportUserWhereInput
}

export type ReportUserUpdateOneInlineInput = {
  /** Connect existing ReportUser document */
  connect?: InputMaybe<ReportUserWhereUniqueInput>
  /** Create and connect one ReportUser document */
  create?: InputMaybe<ReportUserCreateInput>
  /** Delete currently connected ReportUser document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected ReportUser document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single ReportUser document */
  update?: InputMaybe<ReportUserUpdateWithNestedWhereUniqueInput>
  /** Upsert single ReportUser document */
  upsert?: InputMaybe<ReportUserUpsertWithNestedWhereUniqueInput>
}

export type ReportUserUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ReportUserUpdateInput
  /** Unique document search */
  where: ReportUserWhereUniqueInput
}

export type ReportUserUpsertInput = {
  /** Create document if it didn't exist */
  create: ReportUserCreateInput
  /** Update document if it exists */
  update: ReportUserUpdateInput
}

export type ReportUserUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ReportUserUpsertInput
  /** Unique document search */
  where: ReportUserWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type ReportUserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type ReportUserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReportUserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReportUserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReportUserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<ReportUserWhereStageInput>
  documentInStages_none?: InputMaybe<ReportUserWhereStageInput>
  documentInStages_some?: InputMaybe<ReportUserWhereStageInput>
  email?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  photoUrl?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  photoUrl_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  photoUrl_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  photoUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  photoUrl_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  photoUrl_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  photoUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  photoUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  photoUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  photoUrl_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  reports_every?: InputMaybe<ReportWhereInput>
  reports_none?: InputMaybe<ReportWhereInput>
  reports_some?: InputMaybe<ReportWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  username?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  username_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  username_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  username_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  username_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  username_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  username_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  username_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  username_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  username_starts_with?: InputMaybe<Scalars['String']['input']>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ReportUserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReportUserWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReportUserWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReportUserWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ReportUserWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References ReportUser record uniquely */
export type ReportUserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  username?: InputMaybe<Scalars['String']['input']>
}

/** This contains a set of filters that can be used to compare values internally */
export type ReportWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type ReportWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReportWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReportWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReportWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  blocksText?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  blocksText_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  blocksText_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  blocksText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  blocksText_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  blocksText_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  blocksText_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  blocksText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  blocksText_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  blocksText_starts_with?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<ReportWhereStageInput>
  documentInStages_none?: InputMaybe<ReportWhereStageInput>
  documentInStages_some?: InputMaybe<ReportWhereStageInput>
  forNextDayText?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  forNextDayText_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  forNextDayText_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  forNextDayText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  forNextDayText_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  forNextDayText_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  forNextDayText_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  forNextDayText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  forNextDayText_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  forNextDayText_starts_with?: InputMaybe<Scalars['String']['input']>
  forTodayText?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  forTodayText_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  forTodayText_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  forTodayText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  forTodayText_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  forTodayText_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  forTodayText_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  forTodayText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  forTodayText_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  forTodayText_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  link?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  reportUser?: InputMaybe<ReportUserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ReportWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReportWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReportWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReportWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ReportWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Report record uniquely */
export type ReportWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText'
  /** Returns HTMl representation */
  html: Scalars['String']['output']
  /** Returns Markdown representation */
  markdown: Scalars['String']['output']
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output']
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output']
}

/** Scheduled Operation system model */
export type ScheduledOperation = Entity &
  Node & {
    __typename?: 'ScheduledOperation'
    affectedDocuments: Array<ScheduledOperationAffectedDocument>
    /** The time the document was created */
    createdAt: Scalars['DateTime']['output']
    /** User that created this document */
    createdBy?: Maybe<User>
    /** Operation description */
    description?: Maybe<Scalars['String']['output']>
    /** Get the document in other stages */
    documentInStages: Array<ScheduledOperation>
    /** Operation error message */
    errorMessage?: Maybe<Scalars['String']['output']>
    /** The unique identifier */
    id: Scalars['ID']['output']
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']['output']>
    /** User that last published this document */
    publishedBy?: Maybe<User>
    /** Raw operation payload including all details, this field is subject to change */
    rawPayload: Scalars['Json']['output']
    /** The release this operation is scheduled for */
    release?: Maybe<ScheduledRelease>
    /** System stage field */
    stage: Stage
    /** operation Status */
    status: ScheduledOperationStatus
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']['output']
    /** User that last updated this document */
    updatedBy?: Maybe<User>
  }

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
}

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ScheduledOperationAffectedDocument = Asset | Report | ReportUser | WhiteList

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
}

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: ScheduledOperation
}

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>
  release?: InputMaybe<ScheduledReleaseWhereInput>
  status?: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>
  release?: InputMaybe<ScheduledReleaseWhereInput>
  status?: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

/** Scheduled Release system model */
export type ScheduledRelease = Entity &
  Node & {
    __typename?: 'ScheduledRelease'
    /** The time the document was created */
    createdAt: Scalars['DateTime']['output']
    /** User that created this document */
    createdBy?: Maybe<User>
    /** Release description */
    description?: Maybe<Scalars['String']['output']>
    /** Get the document in other stages */
    documentInStages: Array<ScheduledRelease>
    /** Release error message */
    errorMessage?: Maybe<Scalars['String']['output']>
    /** The unique identifier */
    id: Scalars['ID']['output']
    /** Whether scheduled release should be run */
    isActive: Scalars['Boolean']['output']
    /** Whether scheduled release is implicit */
    isImplicit: Scalars['Boolean']['output']
    /** Operations to run with this release */
    operations: Array<ScheduledOperation>
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']['output']>
    /** User that last published this document */
    publishedBy?: Maybe<User>
    /** Release date and time */
    releaseAt?: Maybe<Scalars['DateTime']['output']>
    /** System stage field */
    stage: Stage
    /** Release Status */
    status: ScheduledReleaseStatus
    /** Release Title */
    title?: Maybe<Scalars['String']['output']>
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']['output']
    /** User that last updated this document */
    updatedBy?: Maybe<User>
  }

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
}

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>
}

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: ScheduledRelease
}

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>
  operations_every?: InputMaybe<ScheduledOperationWhereInput>
  operations_none?: InputMaybe<ScheduledOperationWhereInput>
  operations_some?: InputMaybe<ScheduledOperationWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  status?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>
}

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput
  /** Document search */
  where: ScheduledReleaseWhereInput
}

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>
}

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput
}

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>
  operations_every?: InputMaybe<ScheduledOperationWhereInput>
  operations_none?: InputMaybe<ScheduledOperationWhereInput>
  operations_some?: InputMaybe<ScheduledOperationWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  status?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION',
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>
}

/** User system model */
export type User = Entity &
  Node & {
    __typename?: 'User'
    /** The time the document was created */
    createdAt: Scalars['DateTime']['output']
    /** Get the document in other stages */
    documentInStages: Array<User>
    /** The unique identifier */
    id: Scalars['ID']['output']
    /** Flag to determine if user is active or not */
    isActive: Scalars['Boolean']['output']
    /** User Kind. Can be either MEMBER, PAT or PUBLIC */
    kind: UserKind
    /** The username */
    name: Scalars['String']['output']
    /** Profile Picture url */
    picture?: Maybe<Scalars['String']['output']>
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']['output']>
    /** System stage field */
    stage: Stage
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']['output']
  }

/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: UserWhereUniqueInput
}

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<UserEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>
}

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: User
}

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK',
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  documentInStages_every?: InputMaybe<UserWhereStageInput>
  documentInStages_none?: InputMaybe<UserWhereStageInput>
  documentInStages_some?: InputMaybe<UserWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>
  kind?: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  picture?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
}

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
}

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  documentInStages_every?: InputMaybe<UserWhereStageInput>
  documentInStages_none?: InputMaybe<UserWhereStageInput>
  documentInStages_some?: InputMaybe<UserWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>
  kind?: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  picture?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Version = {
  __typename?: 'Version'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['ID']['output']
  revision: Scalars['Int']['output']
  stage: Stage
}

export type VersionWhereInput = {
  id: Scalars['ID']['input']
  revision: Scalars['Int']['input']
  stage: Stage
}

export type WhiteList = Entity &
  Node & {
    __typename?: 'WhiteList'
    /** The time the document was created */
    createdAt: Scalars['DateTime']['output']
    /** User that created this document */
    createdBy?: Maybe<User>
    /** Get the document in other stages */
    documentInStages: Array<WhiteList>
    email: Scalars['String']['output']
    /** List of WhiteList versions */
    history: Array<Version>
    /** The unique identifier */
    id: Scalars['ID']['output']
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']['output']>
    /** User that last published this document */
    publishedBy?: Maybe<User>
    scheduledIn: Array<ScheduledOperation>
    /** System stage field */
    stage: Stage
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']['output']
    /** User that last updated this document */
    updatedBy?: Maybe<User>
  }

export type WhiteListCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type WhiteListDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

export type WhiteListHistoryArgs = {
  limit?: Scalars['Int']['input']
  skip?: Scalars['Int']['input']
  stageOverride?: InputMaybe<Stage>
}

export type WhiteListPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type WhiteListScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type WhiteListUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type WhiteListConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: WhiteListWhereUniqueInput
}

/** A connection to a list of items. */
export type WhiteListConnection = {
  __typename?: 'WhiteListConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<WhiteListEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type WhiteListCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  email: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type WhiteListCreateManyInlineInput = {
  /** Connect multiple existing WhiteList documents */
  connect?: InputMaybe<Array<WhiteListWhereUniqueInput>>
  /** Create and connect multiple existing WhiteList documents */
  create?: InputMaybe<Array<WhiteListCreateInput>>
}

export type WhiteListCreateOneInlineInput = {
  /** Connect one existing WhiteList document */
  connect?: InputMaybe<WhiteListWhereUniqueInput>
  /** Create and connect one WhiteList document */
  create?: InputMaybe<WhiteListCreateInput>
}

/** An edge in a connection. */
export type WhiteListEdge = {
  __typename?: 'WhiteListEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: WhiteList
}

/** Identifies documents */
export type WhiteListManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WhiteListWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WhiteListWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WhiteListWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<WhiteListWhereStageInput>
  documentInStages_none?: InputMaybe<WhiteListWhereStageInput>
  documentInStages_some?: InputMaybe<WhiteListWhereStageInput>
  email?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum WhiteListOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type WhiteListUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>
}

export type WhiteListUpdateManyInlineInput = {
  /** Connect multiple existing WhiteList documents */
  connect?: InputMaybe<Array<WhiteListConnectInput>>
  /** Create and connect multiple WhiteList documents */
  create?: InputMaybe<Array<WhiteListCreateInput>>
  /** Delete multiple WhiteList documents */
  delete?: InputMaybe<Array<WhiteListWhereUniqueInput>>
  /** Disconnect multiple WhiteList documents */
  disconnect?: InputMaybe<Array<WhiteListWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing WhiteList documents */
  set?: InputMaybe<Array<WhiteListWhereUniqueInput>>
  /** Update multiple WhiteList documents */
  update?: InputMaybe<Array<WhiteListUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple WhiteList documents */
  upsert?: InputMaybe<Array<WhiteListUpsertWithNestedWhereUniqueInput>>
}

export type WhiteListUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>
}

export type WhiteListUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: WhiteListUpdateManyInput
  /** Document search */
  where: WhiteListWhereInput
}

export type WhiteListUpdateOneInlineInput = {
  /** Connect existing WhiteList document */
  connect?: InputMaybe<WhiteListWhereUniqueInput>
  /** Create and connect one WhiteList document */
  create?: InputMaybe<WhiteListCreateInput>
  /** Delete currently connected WhiteList document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected WhiteList document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single WhiteList document */
  update?: InputMaybe<WhiteListUpdateWithNestedWhereUniqueInput>
  /** Upsert single WhiteList document */
  upsert?: InputMaybe<WhiteListUpsertWithNestedWhereUniqueInput>
}

export type WhiteListUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: WhiteListUpdateInput
  /** Unique document search */
  where: WhiteListWhereUniqueInput
}

export type WhiteListUpsertInput = {
  /** Create document if it didn't exist */
  create: WhiteListCreateInput
  /** Update document if it exists */
  update: WhiteListUpdateInput
}

export type WhiteListUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: WhiteListUpsertInput
  /** Unique document search */
  where: WhiteListWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type WhiteListWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type WhiteListWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WhiteListWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WhiteListWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WhiteListWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<WhiteListWhereStageInput>
  documentInStages_none?: InputMaybe<WhiteListWhereStageInput>
  documentInStages_some?: InputMaybe<WhiteListWhereStageInput>
  email?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type WhiteListWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WhiteListWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WhiteListWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WhiteListWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<WhiteListWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References WhiteList record uniquely */
export type WhiteListWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
}

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some',
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual',
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert',
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one',
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update',
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union',
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization',
}

export type CreateReportUserMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  photoUrl?: InputMaybe<Scalars['String']['input']>
  username?: InputMaybe<Scalars['String']['input']>
}>

export type CreateReportUserMutation = {
  __typename?: 'Mutation'
  createReportUser?: { __typename?: 'ReportUser'; id: string } | null
}

export type CreateReportMutationVariables = Exact<{
  blocksText?: InputMaybe<Scalars['String']['input']>
  forNextDayText?: InputMaybe<Scalars['String']['input']>
  forTodayText?: InputMaybe<Scalars['String']['input']>
  link?: InputMaybe<Scalars['String']['input']>
  userID?: InputMaybe<Scalars['ID']['input']>
}>

export type CreateReportMutation = {
  __typename?: 'Mutation'
  createReport?: { __typename?: 'Report'; id: string } | null
}

export type DeleteReportMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>
}>

export type DeleteReportMutation = {
  __typename?: 'Mutation'
  deleteReport?: { __typename?: 'Report'; id: string } | null
}

export type UpdateReportMutationVariables = Exact<{
  blocksText?: InputMaybe<Scalars['String']['input']>
  forNextDayText?: InputMaybe<Scalars['String']['input']>
  forTodayText?: InputMaybe<Scalars['String']['input']>
  link?: InputMaybe<Scalars['String']['input']>
  reportID?: InputMaybe<Scalars['ID']['input']>
}>

export type UpdateReportMutation = {
  __typename?: 'Mutation'
  updateReport?: { __typename?: 'Report'; id: string } | null
  publishReport?: { __typename?: 'Report'; id: string } | null
}

export type ReportsQueryVariables = Exact<{ [key: string]: never }>

export type ReportsQuery = {
  __typename?: 'Query'
  reports: Array<{
    __typename?: 'Report'
    id: string
    forTodayText: string
    forNextDayText: string
    blocksText?: string | null
    reportUser?: {
      __typename?: 'ReportUser'
      id: string
      name: string
      photoUrl?: string | null
      username: string
      email: string
    } | null
  }>
}

export type GetUserByEmailQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']['input']>
}>

export type GetUserByEmailQuery = {
  __typename?: 'Query'
  reportUser?: { __typename?: 'ReportUser'; id: string } | null
}

export type GetWhiteListUserByEmailQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']['input']>
}>

export type GetWhiteListUserByEmailQuery = {
  __typename?: 'Query'
  whiteList?: { __typename?: 'WhiteList'; id: string } | null
}

export const CreateReportUserDocument = gql`
  mutation CreateReportUser($email: String = "", $name: String = "", $photoUrl: String = "", $username: String = "") {
    createReportUser(data: { name: $name, username: $username, email: $email, photoUrl: $photoUrl }) {
      id
    }
  }
`
export type CreateReportUserMutationFn = Apollo.MutationFunction<
  CreateReportUserMutation,
  CreateReportUserMutationVariables
>

/**
 * __useCreateReportUserMutation__
 *
 * To run a mutation, you first call `useCreateReportUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReportUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReportUserMutation, { data, loading, error }] = useCreateReportUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      photoUrl: // value for 'photoUrl'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useCreateReportUserMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateReportUserMutation, CreateReportUserMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateReportUserMutation, CreateReportUserMutationVariables>(
    CreateReportUserDocument,
    options
  )
}
export type CreateReportUserMutationHookResult = ReturnType<typeof useCreateReportUserMutation>
export type CreateReportUserMutationResult = Apollo.MutationResult<CreateReportUserMutation>
export type CreateReportUserMutationOptions = Apollo.BaseMutationOptions<
  CreateReportUserMutation,
  CreateReportUserMutationVariables
>
export const CreateReportDocument = gql`
  mutation CreateReport(
    $blocksText: String = ""
    $forNextDayText: String = ""
    $forTodayText: String = ""
    $link: String = ""
    $userID: ID = ""
  ) {
    createReport(
      data: {
        forTodayText: $forTodayText
        blocksText: $blocksText
        forNextDayText: $forNextDayText
        link: $link
        reportUser: { connect: { id: $userID } }
      }
    ) {
      id
    }
  }
`
export type CreateReportMutationFn = Apollo.MutationFunction<CreateReportMutation, CreateReportMutationVariables>

/**
 * __useCreateReportMutation__
 *
 * To run a mutation, you first call `useCreateReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReportMutation, { data, loading, error }] = useCreateReportMutation({
 *   variables: {
 *      blocksText: // value for 'blocksText'
 *      forNextDayText: // value for 'forNextDayText'
 *      forTodayText: // value for 'forTodayText'
 *      link: // value for 'link'
 *      userID: // value for 'userID'
 *   },
 * });
 */
export function useCreateReportMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateReportMutation, CreateReportMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateReportMutation, CreateReportMutationVariables>(CreateReportDocument, options)
}
export type CreateReportMutationHookResult = ReturnType<typeof useCreateReportMutation>
export type CreateReportMutationResult = Apollo.MutationResult<CreateReportMutation>
export type CreateReportMutationOptions = Apollo.BaseMutationOptions<
  CreateReportMutation,
  CreateReportMutationVariables
>
export const DeleteReportDocument = gql`
  mutation DeleteReport($id: ID = "") {
    deleteReport(where: { id: $id }) {
      id
    }
  }
`
export type DeleteReportMutationFn = Apollo.MutationFunction<DeleteReportMutation, DeleteReportMutationVariables>

/**
 * __useDeleteReportMutation__
 *
 * To run a mutation, you first call `useDeleteReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReportMutation, { data, loading, error }] = useDeleteReportMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteReportMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteReportMutation, DeleteReportMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteReportMutation, DeleteReportMutationVariables>(DeleteReportDocument, options)
}
export type DeleteReportMutationHookResult = ReturnType<typeof useDeleteReportMutation>
export type DeleteReportMutationResult = Apollo.MutationResult<DeleteReportMutation>
export type DeleteReportMutationOptions = Apollo.BaseMutationOptions<
  DeleteReportMutation,
  DeleteReportMutationVariables
>
export const UpdateReportDocument = gql`
  mutation UpdateReport(
    $blocksText: String = ""
    $forNextDayText: String = ""
    $forTodayText: String = ""
    $link: String = ""
    $reportID: ID = ""
  ) {
    updateReport(
      data: { blocksText: $blocksText, forNextDayText: $forNextDayText, forTodayText: $forTodayText, link: $link }
      where: { id: $reportID }
    ) {
      id
    }
    publishReport(where: { id: $reportID }, to: PUBLISHED) {
      id
    }
  }
`
export type UpdateReportMutationFn = Apollo.MutationFunction<UpdateReportMutation, UpdateReportMutationVariables>

/**
 * __useUpdateReportMutation__
 *
 * To run a mutation, you first call `useUpdateReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReportMutation, { data, loading, error }] = useUpdateReportMutation({
 *   variables: {
 *      blocksText: // value for 'blocksText'
 *      forNextDayText: // value for 'forNextDayText'
 *      forTodayText: // value for 'forTodayText'
 *      link: // value for 'link'
 *      reportID: // value for 'reportID'
 *   },
 * });
 */
export function useUpdateReportMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateReportMutation, UpdateReportMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateReportMutation, UpdateReportMutationVariables>(UpdateReportDocument, options)
}
export type UpdateReportMutationHookResult = ReturnType<typeof useUpdateReportMutation>
export type UpdateReportMutationResult = Apollo.MutationResult<UpdateReportMutation>
export type UpdateReportMutationOptions = Apollo.BaseMutationOptions<
  UpdateReportMutation,
  UpdateReportMutationVariables
>
export const ReportsDocument = gql`
  query Reports {
    reports {
      id
      forTodayText
      forNextDayText
      blocksText
      reportUser {
        id
        name
        photoUrl
        username
        email
      }
    }
  }
`

/**
 * __useReportsQuery__
 *
 * To run a query within a React component, call `useReportsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReportsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReportsQuery({
 *   variables: {
 *   },
 * });
 */
export function useReportsQuery(baseOptions?: Apollo.QueryHookOptions<ReportsQuery, ReportsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ReportsQuery, ReportsQueryVariables>(ReportsDocument, options)
}
export function useReportsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReportsQuery, ReportsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ReportsQuery, ReportsQueryVariables>(ReportsDocument, options)
}
export function useReportsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<ReportsQuery, ReportsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<ReportsQuery, ReportsQueryVariables>(ReportsDocument, options)
}
export type ReportsQueryHookResult = ReturnType<typeof useReportsQuery>
export type ReportsLazyQueryHookResult = ReturnType<typeof useReportsLazyQuery>
export type ReportsSuspenseQueryHookResult = ReturnType<typeof useReportsSuspenseQuery>
export type ReportsQueryResult = Apollo.QueryResult<ReportsQuery, ReportsQueryVariables>
export const GetUserByEmailDocument = gql`
  query GetUserByEmail($email: String = "") {
    reportUser(where: { email: $email }) {
      id
    }
  }
`

/**
 * __useGetUserByEmailQuery__
 *
 * To run a query within a React component, call `useGetUserByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetUserByEmailQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUserByEmailQuery, GetUserByEmailQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserByEmailQuery, GetUserByEmailQueryVariables>(GetUserByEmailDocument, options)
}
export function useGetUserByEmailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserByEmailQuery, GetUserByEmailQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserByEmailQuery, GetUserByEmailQueryVariables>(GetUserByEmailDocument, options)
}
export function useGetUserByEmailSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserByEmailQuery, GetUserByEmailQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetUserByEmailQuery, GetUserByEmailQueryVariables>(GetUserByEmailDocument, options)
}
export type GetUserByEmailQueryHookResult = ReturnType<typeof useGetUserByEmailQuery>
export type GetUserByEmailLazyQueryHookResult = ReturnType<typeof useGetUserByEmailLazyQuery>
export type GetUserByEmailSuspenseQueryHookResult = ReturnType<typeof useGetUserByEmailSuspenseQuery>
export type GetUserByEmailQueryResult = Apollo.QueryResult<GetUserByEmailQuery, GetUserByEmailQueryVariables>
export const GetWhiteListUserByEmailDocument = gql`
  query GetWhiteListUserByEmail($email: String = "") {
    whiteList(where: { email: $email }) {
      id
    }
  }
`

/**
 * __useGetWhiteListUserByEmailQuery__
 *
 * To run a query within a React component, call `useGetWhiteListUserByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWhiteListUserByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWhiteListUserByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetWhiteListUserByEmailQuery(
  baseOptions?: Apollo.QueryHookOptions<GetWhiteListUserByEmailQuery, GetWhiteListUserByEmailQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetWhiteListUserByEmailQuery, GetWhiteListUserByEmailQueryVariables>(
    GetWhiteListUserByEmailDocument,
    options
  )
}
export function useGetWhiteListUserByEmailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetWhiteListUserByEmailQuery, GetWhiteListUserByEmailQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetWhiteListUserByEmailQuery, GetWhiteListUserByEmailQueryVariables>(
    GetWhiteListUserByEmailDocument,
    options
  )
}
export function useGetWhiteListUserByEmailSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetWhiteListUserByEmailQuery, GetWhiteListUserByEmailQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetWhiteListUserByEmailQuery, GetWhiteListUserByEmailQueryVariables>(
    GetWhiteListUserByEmailDocument,
    options
  )
}
export type GetWhiteListUserByEmailQueryHookResult = ReturnType<typeof useGetWhiteListUserByEmailQuery>
export type GetWhiteListUserByEmailLazyQueryHookResult = ReturnType<typeof useGetWhiteListUserByEmailLazyQuery>
export type GetWhiteListUserByEmailSuspenseQueryHookResult = ReturnType<typeof useGetWhiteListUserByEmailSuspenseQuery>
export type GetWhiteListUserByEmailQueryResult = Apollo.QueryResult<
  GetWhiteListUserByEmailQuery,
  GetWhiteListUserByEmailQueryVariables
>
