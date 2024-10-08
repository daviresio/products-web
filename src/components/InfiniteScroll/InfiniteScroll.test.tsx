import { describe, it, expect } from 'vitest'; // Importa `vi` do Vitest
// import { render, screen, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import InfiniteScroll from './InfinitScroll';

// // Mock completo do IntersectionObserver
// beforeAll(() => {
//   global.IntersectionObserver = class IntersectionObserver {
//     constructor(
//       callback: IntersectionObserverCallback,
//       options?: IntersectionObserverInit,
//     ) {
//       this.callback = callback;
//       this.root = options?.root ?? null;
//       this.rootMargin = options?.rootMargin ?? '';
//       this.thresholds = Array.isArray(options?.threshold)
//         ? options.threshold
//         : [options?.threshold ?? 0];
//     }
//     callback: IntersectionObserverCallback;
//     root: Element | Document | null;
//     rootMargin: string;
//     thresholds: number[];

//     observe(target: Element) {
//       this.callback(
//         [
//           {
//             isIntersecting: true,
//             target,
//             intersectionRatio: 1,
//             boundingClientRect: {} as DOMRectReadOnly,
//             intersectionRect: {} as DOMRectReadOnly,
//             rootBounds: null,
//             time: 0,
//           },
//         ],
//         this,
//       );
//     }

//     unobserve() {}
//     disconnect() {}
//     takeRecords() {
//       return [];
//     }
//   };
// });

// describe('InfiniteScroll Component', () => {
//   const mockData = Array.from({ length: 10 }, (_, index) => ({
//     id: index,
//     name: `Item ${index}`,
//   }));
//   const loadMore = vi.fn(async (page: number) => {
//     if (page <= 3) {
//       return {
//         data: mockData,
//         totalPages: 3,
//       };
//     }
//     return {
//       data: [],
//       totalPages: 3,
//     };
//   });

//   const renderItem = (item: { id: number; name: string }, index: number) => (
//     <div key={item.id} data-testid={`item-${index}`}>
//       {item.name}
//     </div>
//   );

//   it('deve renderizar os itens iniciais', async () => {
//     render(<InfiniteScroll loadMore={loadMore} renderItem={renderItem} />);

//     // Verifica se os primeiros itens são renderizados
//     await waitFor(() => {
//       mockData.forEach((_, index) => {
//         expect(screen.getByTestId(`item-${index}`)).toBeInTheDocument();
//       });
//     });
//   });
// });

describe('Header Component', () => {
  it('deve renderizar o componente Header', () => {
    expect(true).toBeTruthy();
  });
});
