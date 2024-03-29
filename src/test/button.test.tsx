import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ButtonStyled } from '../components/common/ButtonStyled';


describe('Prueba de ButtonStyled', () => {

    test('debería tener el color de fondo correcto, green en este caso', () => {
        render(<ButtonStyled bg='green'>Click me</ButtonStyled>);

        const button = screen.getByText('Click me');
        expect(button).toHaveStyle('background-color: green');
    });

    test('debería tener el color de fondo #EBF1EF por defecto si no se proporciona uno', () => {
        render(<ButtonStyled>Click me</ButtonStyled>);

        const button = screen.getByText('Click me');
        expect(button).toHaveStyle('background-color: #EBF1EF');
    });
});