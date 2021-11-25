import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => {
    
    test("Debe mostrar <PrimeraApp /> correctamente", () => {

        const saludo = 'Mi Primera App';
        const wrapper = shallow( <PrimeraApp saludo = { saludo }/> ); 
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe mostrar subtitulo enviado por props', () => {

        const saludo = 'Mi primera App';
        const subTitulo = 'con React';
        const wrapper = shallow(
            <PrimeraApp
                saludo = { saludo }
                subtitulo = { subTitulo }
            />)
        const textoParrafo = wrapper.find('p').text();
        // console.log( textoParrafo );
        expect( textoParrafo ).toBe( subTitulo );

    });

    // test('Debe de mostrar el mensaje "Mi Primera App"', () => {
        
    //     const saludo = "Mi Primera App";
    //     const { getByText} = render( <PrimeraApp saludo = { saludo } />);
    //     expect( getByText( saludo )).toBeInTheDocument();

    // });
});