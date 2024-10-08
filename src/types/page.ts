export interface Page<T> {
  page: number;
  page_size: number;
  total_pages: number;
  data: T[];
}
