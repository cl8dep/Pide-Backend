import { IPaginationMeta, IPaginationOptionsRoutingLabels } from ".";
import { PaginationType } from "./PaginationType";

export interface IPaginationOptions<CustomMetaType = IPaginationMeta> {
  /**
   * @default 10
   * the amount of items to be requested per page
   */
  limit: number | string;

  /**
   * @default 1
   * the page that is requested
   */
  page: number | string;

  /**
   * a basic route for generating links (i.e., WITHOUT query params)
   */
  route?: string;

  /**
   * For transforming the default meta data to a custom type
   */
  metaTransformer?: (meta: IPaginationMeta) => CustomMetaType;

  /**
   * routingLabels for append in links (limit or/and page)
   */
  routingLabels?: IPaginationOptionsRoutingLabels;

  /**
   * @default PaginationTypeEnum.LIMIT
   * Used for changing query method to take/skip (defaults to limit/offset if no argument supplied)
   */
  paginationType?: PaginationType;

  /**
   * @default true
   * Turn off pagination count total queries. itemCount, totalItems, itemsPerPage and totalPages will be undefined
   */
  countQueries?: boolean;
}