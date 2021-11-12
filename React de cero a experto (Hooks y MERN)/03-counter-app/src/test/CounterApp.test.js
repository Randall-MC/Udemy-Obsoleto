import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp'

describe('Pruebas en CounterApp', () => {

    let wrapper = shallow( <CounterApp /> );
    beforeEach( () => {

        wrapper = shallow( <CounterApp /> );

    });
    
    test('Debe mostrar <CounterApp /> correctamente (valores por defecto) + snapshot', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe mostrar <CounterApp /> con value = 100 + snapshot', () => {
        
        const wrapper = shallow( <CounterApp value = { 100 }/>);
        const counterText = wrapper.find('h2').text().trim();
        // console.log( typeof counterText );
        expect( counterText ).toBe( '100' );

    });

    test('Debe disminuir el valor a 9 con el botón -1', () => {

        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        // console.log( counterText );
        expect( counterText ).toBe( '9' );

    });

    test('Debe incrementar el valor a 11 con el botón +1', () => {
        
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        // console.log( counterText );
        expect( counterText ).toBe( '11' );
        
    });

    test('Debe regresar el valor a 105 con el botón reset', () => {
        
        const wrapper = shallow( <CounterApp value = { 105 }/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        // console.log( counterText );
        expect( counterText ).toBe( '105' );
    
    });
});
