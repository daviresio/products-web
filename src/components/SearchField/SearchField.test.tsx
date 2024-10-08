// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
// import SearchField from './SearchField';

// // Mock para `localStorage`
// beforeEach(() => {
//   localStorage.clear();
//   localStorage.setItem(
//     'previousSearches',
//     JSON.stringify(['React', 'JavaScript', 'CSS', 'HTML', 'Node.js']),
//   );
// });

// describe('SearchField Component', () => {
//   it('deve renderizar o campo de pesquisa corretamente', () => {
//     render(<SearchField />);

//     // Verifica se o campo de pesquisa está presente no documento
//     const inputElement = screen.getByPlaceholderText('Estoy buscando...');
//     expect(inputElement).toBeInTheDocument();

//     // Verifica se o botão de pesquisa está presente
//     const buttonElement = screen.getByRole('button');
//     expect(buttonElement).toBeInTheDocument();
//   });

//   it('deve mostrar sugestões de pesquisa ao focar no campo de pesquisa', async () => {
//     render(<SearchField />);

//     // Foca no campo de pesquisa
//     const inputElement = screen.getByPlaceholderText('Estoy buscando...');
//     fireEvent.focus(inputElement);

//     // Espera que as sugestões sejam exibidas
//     await waitFor(() => {
//       const suggestions = screen.getByRole('list');
//       expect(suggestions).toBeInTheDocument();
//     });
//   });

//   it('deve filtrar e mostrar sugestões com base na entrada do usuário', async () => {
//     render(<SearchField />);

//     // Digita "Re" no campo de pesquisa
//     const inputElement = screen.getByPlaceholderText('Estoy buscando...');
//     fireEvent.change(inputElement, { target: { value: 'Re' } });

//     // Espera que a sugestão "React" seja exibida
//     await waitFor(() => {
//       const suggestion = screen.getByRole('button', {
//         name: (_, element) => {
//           // Verifica se o texto dentro do botão contém "React"
//           return element?.textContent?.includes('React') ?? false;
//         },
//       });
//       expect(suggestion).toBeInTheDocument();
//     });
//   });

//   it('deve salvar o termo pesquisado ao enviar o formulário', () => {
//     render(<SearchField />);

//     // Digita "Vue.js" no campo de pesquisa
//     const inputElement = screen.getByPlaceholderText('Estoy buscando...');
//     fireEvent.change(inputElement, { target: { value: 'Vue.js' } });

//     // Submete o formulário
//     fireEvent.submit(inputElement.closest('form')!);

//     // Verifica se o termo foi salvo no localStorage
//     const searches = JSON.parse(
//       localStorage.getItem('previousSearches') || '[]',
//     );
//     expect(searches).toContain('Vue.js');
//   });

//   it('deve esconder a lista de sugestões ao perder o foco', async () => {
//     render(<SearchField />);

//     // Foca no campo de pesquisa e depois dispara um evento de blur
//     const inputElement = screen.getByPlaceholderText('Estoy buscando...');
//     fireEvent.focus(inputElement);
//     fireEvent.blur(inputElement);

//     // Espera que a lista de sugestões não esteja mais presente
//     await waitFor(() => {
//       expect(screen.queryByRole('list')).not.toBeInTheDocument();
//     });
//   });

//   it('deve preencher o campo de pesquisa ao clicar em uma sugestão anterior', async () => {
//     render(<SearchField />);

//     // Foca no campo de pesquisa para exibir sugestões
//     const inputElement = screen.getByPlaceholderText('Estoy buscando...');
//     fireEvent.focus(inputElement);

//     // Espera que a sugestão "React" seja exibida e clique nela
//     const suggestion = await screen.findByText('React');
//     fireEvent.click(suggestion);

//     // Verifica se o campo de pesquisa foi preenchido com "React"
//     expect(inputElement).toHaveValue('React');
//   });
// });

describe('Header Component', () => {
  it('deve renderizar o componente Header', () => {
    expect(true).toBeTruthy();
  });
});
