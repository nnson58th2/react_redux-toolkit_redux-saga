export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface ListParams {
  _limit: number;
  _order: 'asc' | 'desc';
  _page: number;
  _sort: string;

  [key: string]: any;
}

export interface PaginationParams {
  _limit: number;
  _page: number;
  _total: number;
}
