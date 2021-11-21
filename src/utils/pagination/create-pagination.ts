import { ObjectLiteral } from '~/types/ObjectLiteral';
import {
  IPaginationLinks,
  IPaginationMeta,
  IPaginationOptionsRoutingLabels,
} from '../../types/pagination';
import { Pagination } from '../../types/pagination/Pagination';

export function createPaginationObject<
  T,
  CustomMetaType extends ObjectLiteral = IPaginationMeta,
>({
  items,
  totalItems,
  currentPage,
  limit,
  route,
  metaTransformer,
  routingLabels,
}: {
  items: T[];
  totalItems: number;
  currentPage: number;
  limit: number;
  route?: string;
  metaTransformer?: (meta: IPaginationMeta) => CustomMetaType;
  routingLabels?: IPaginationOptionsRoutingLabels;
}): Pagination<T, CustomMetaType> {
  const totalPages = Math.ceil(totalItems / limit);

  const hasFirstPage = route;
  const hasPreviousPage = route && currentPage > 1;
  const hasNextPage = route && currentPage < totalPages;
  const hasLastPage = route && totalPages > 0;

  const symbol = route && new RegExp(/\?/).test(route) ? '&' : '?';

  const limitLabel =
    routingLabels && routingLabels.limitLabel
      ? routingLabels.limitLabel
      : 'limit';

  const pageLabel =
    routingLabels && routingLabels.pageLabel ? routingLabels.pageLabel : 'page';

  const routes: IPaginationLinks = {
    first: hasFirstPage ? `${route}${symbol}${limitLabel}=${limit}` : '',
    previous: hasPreviousPage
      ? `${route}${symbol}${pageLabel}=${
          currentPage - 1
        }&${limitLabel}=${limit}`
      : '',
    next: hasNextPage
      ? `${route}${symbol}${pageLabel}=${
          currentPage + 1
        }&${limitLabel}=${limit}`
      : '',
    last: hasLastPage
      ? `${route}${symbol}${pageLabel}=${totalPages}&${limitLabel}=${limit}`
      : '',
  };

  const meta: IPaginationMeta = {
    totalItems: totalItems,
    itemCount: items.length,
    itemsPerPage: limit,

    totalPages: totalPages,
    currentPage: currentPage,
  };

  if (metaTransformer)
    return new Pagination<T, CustomMetaType>(
      items,
      metaTransformer(meta),
      route && routes,
    );

  // @ts-ignore
  return new Pagination<T, CustomMetaType>(items, meta, route && routes);
}
