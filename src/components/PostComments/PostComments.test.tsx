import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';
import App from '../../App';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve inserir dois comentários', () => {
        const {debug} = render(<App />)

        const comentarios = ['Comentário 1', 'Comentário 2']

        comentarios.forEach((comentario) => {
            addComentario(comentario)
            // eslint-disable-next-line testing-library/no-debugging-utils
            debug()
            expect(screen.getByText(comentario)).toBeInTheDocument()
        })

        function addComentario(comentario: string) {
            fireEvent.change(screen.getByTestId('textarea-comentario'), {
                target: { value: comentario }
            });
    
            fireEvent.click(screen.getByTestId('btn-comentar'));
        }        
    })
});